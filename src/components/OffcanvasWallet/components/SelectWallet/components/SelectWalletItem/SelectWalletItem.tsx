import React from 'react';
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import "./SelectWalletItem.css"
import {handleGetAddress} from "../../functions/handleGetAddress.ts";
import {handleFetchGet} from "../../../../../../functions/handleFetchGet.ts";
import {API_USER_NONCE} from "../../../../../../constants/api.ts";

interface ISelectWalletItem {
	data: {
		id: string,
		title: string,
		image: string,
		disabled: boolean,
	},
	setWeb3disable: () => void,
}

const SelectWalletItem: React.FC<ISelectWalletItem> = ({ data, setWeb3disable }) => {
	const getTooltip = (text: string) => <Tooltip>{text} disable now!</Tooltip>;

	const handleClick = async () => {
		//get address or error
		const dataAddress = await handleGetAddress();

		//check error
		if (dataAddress.error) {
			setWeb3disable();
			return;
		}

		handleFetchGet(API_USER_NONCE(dataAddress.address))
			.then(res => {
				if (res?.data?.address){
					console.log(res.data.address)
				}
			})
			.catch(err => console.log(err))
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
