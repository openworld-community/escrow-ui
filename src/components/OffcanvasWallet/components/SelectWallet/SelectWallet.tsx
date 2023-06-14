import React, {useState} from 'react';
import "./SelectWallet.css";
import {SelectWalletData} from "./SelectWalletData.ts";
import SelectWalletItem from "./components/SelectWalletItem/SelectWalletItem.tsx";
import {Alert} from "react-bootstrap";

const SelectWallet: React.FC = () => {

	const [web3enable, setWeb3enable] = useState(true);

	return (
		<div className={'SelectWallet'}>
			<p className="small">
				If you connect with one of the wallets below, make sure you read
				and agree to Vector DeFi Terms of Service. Store your private
				keys or seed phrase securely, and never share them with anyone.
			</p>

			{
				!web3enable &&
				<Alert variant={"danger"} className={"p-2 my-2 text-center small"}>
					You need to allow MetaMask and activate it first.
					Then to sign the message to be able to log in.
					<hr />
					After allow the metamask please reload the page.
				</Alert>
			}

			<div className="select-container">
				{
					SelectWalletData.map(elem => (
						<SelectWalletItem
							key={elem.id}
							data={elem}
							setWeb3disable={() => setWeb3enable(false)}
						/>
					))
				}
			</div>
		</div>
	);
};

export default SelectWallet;
