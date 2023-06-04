import React from 'react';
import "./SelectWallet.css";
import {SelectWalletData} from "./SelectWalletData.ts";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const SelectWallet: React.FC = () => {

	const getTooltip = () => {
		return (
			<Tooltip>Service disable now!</Tooltip>
		)
	}

	return (
		<div className={'SelectWallet'}>
			<p className="small">
				If you connect with one of the wallets below, make sure you read and agree to Vector DeFi Terms of Service. Store your private keys or seed phrase securely, and never share them with anyone.
			</p>

			<div className="select-container">
				{
					SelectWalletData.map(elem => (
						elem.disabled ?
							<OverlayTrigger key={elem.id} overlay={getTooltip()}>
                                <span className="overlay-block d-inline-block">
									<button disabled style={{ pointerEvents: 'none' }} className={"block"}>
										<img src={elem.image} alt={elem.title}/>
										<p className={"small"}>{elem.title}</p>
									</button>
                                </span>
							</OverlayTrigger>:
							<button key={elem.id} className={"block"}>
								<img src={elem.image} alt={elem.title}/>
								<p className={"small"}>{elem.title}</p>
							</button>
					))
				}
			</div>
		</div>
	);
};

export default SelectWallet;
