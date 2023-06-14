import React from 'react';
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import "./SelectWalletItem.css"
import {API_USER_AUTH, API_USER_CREATE, API_USER_ME, API_USER_NONCE} from "../../../../../../constants/api.ts";
import {handleRequest} from "../../../../../../functions/handleRequest.ts";
import Web3 from "web3";
import {useAppDispatch} from "../../../../../../store/store.ts";
import {setUser} from "../../../../../../store/slices/userSlice.ts";
import {getUserAvatar} from "../../../../../../functions/getUserAvatar.ts";

interface ISelectWalletItem {
	data: {
		id: string,
		title: string,
		image: string,
		disabled: boolean,
	},
	setWeb3disable: () => void,
}

type TGetAddress = {
	address: null | string,
	error: boolean,
}

let web3: Web3 | undefined = undefined; // Will hold the web3 instance

const SelectWalletItem: React.FC<ISelectWalletItem> = ({ data, setWeb3disable }) => {

	const dispatch = useAppDispatch();
	const getTooltip = (text: string) => <Tooltip>{text} disable now!</Tooltip>;

	const handleSignMessage = async (address:string, nonce:string) => {
		try {
			const signature = await web3!.eth.personal.sign(
				`I am signing my one-time nonce: ${nonce}`,
				address,
				'' // MetaMask will ignore the password argument here
			);
			return { address, signature };
		} catch (err) {
			throw new Error('You need to sign the message to be able to log in.');
		}
	};

	const handleGetAddress = async ():Promise<TGetAddress> => {

		const errorReturn = {address: null, error: true};

		// Check if MetaMask is installed
		if (!(window as any).ethereum) return errorReturn;

		if (!web3) {
			try {
				// Request account access if needed
				await (window as any).ethereum.enable();
				// We don't know web3 version, we use our own instance of Web3 with the MetaMask provider
				web3 = new Web3((window as any).ethereum);
			} catch (error) {
				return errorReturn;
			}
		}

		const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) return errorReturn;

		return {
			error: false,
			address: coinbase.toLowerCase(),
		}
	}

	const handleGetUser = (token:string) => {
		handleRequest("GET",API_USER_ME,{},token)
			.then(res => dispatch(setUser({
				...res.data,
				avatar: getUserAvatar(),
			})))
			.catch(() => setWeb3disable())
	}

	const handleAuth = (address:string, signature:string) => {
		handleRequest("POST",API_USER_AUTH,{address: address, signature: signature})
			.then(res => handleGetUser(res.data.access_token))
			.catch(() => setWeb3disable())
	}

	const handleClick = async () => {
		//get address or error
		const dataAddress = await handleGetAddress();

		//check error
		if (dataAddress.error) {
			setWeb3disable();
			return;
		}

		// GET USER NONCE
		handleRequest("GET",API_USER_NONCE(dataAddress.address),{})
			.then(res => {
				//GET SIGNATURE FOR AUTH
				handleSignMessage(res?.data?.address, res?.data?.nonce)
					.then(resMsg => handleAuth(resMsg.address, resMsg.signature))//AUTH -> GET TOKEN
					.catch(() => setWeb3disable())
			})
			.catch(err => {
				if (err.response.status === 404) {
					//IF WE CANT FIND USER -> USER CREATE -> GET SIGNATURE FOR AUTH -> AUTH
					handleRequest("POST", API_USER_CREATE, {
						address: dataAddress.address,
						username: dataAddress.address,
					})
						.then(res => {
							handleSignMessage(res?.data?.address, res?.data?.nonce)
								.then(resMsg => handleAuth(resMsg.address, resMsg.signature))//AUTH -> GET TOKEN
								.catch(() => setWeb3disable())
						})
						.catch(() => setWeb3disable())
				} else {
					setWeb3disable()
				}
			})
	};

	if (data.disabled) {
		return (
			<OverlayTrigger key={data.id} overlay={getTooltip(data.title)}>
				<span className="overlay-block d-inline-block">
					<button disabled style={{ pointerEvents: 'none' }} className={"block"}>
						<img src={data.image} alt={data.title}/>
						<p className={"small"}>{data.title}</p>
					</button>
				</span>
			</OverlayTrigger>
		)
	}else {
		return (
			<button key={data.id} className={"block"} onClick={handleClick}>
				<img src={data.image} alt={data.title}/>
				<p className={"small"}>{data.title}</p>
			</button>
		)
	}
};

export default SelectWalletItem;
