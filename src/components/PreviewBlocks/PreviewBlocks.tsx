import React from 'react';
import "./PreviewBlocks.css";
import {PreviewBlocksData} from "./PreviewBlocksData.ts";
import {Link} from "react-router-dom";
import {PATH_ESCROW_MANAGE} from "../../constants/router.ts";

const PreviewBlocks: React.FC = () => {
	return (
		<div className={"PreviewBlocks"}>
			<div className="block main">
				<div className="inner">
					<h2>
						Decentralize
						<span>Escrow Solution</span>
						for Trustless Transactions
					</h2>

					<p>
						Welcome to our decentralized escrow smart contract template!
						Our template provides a secure and reliable way to facilitate
						trustless transactions between parties without the need for
						a traditional intermediary such as a bank or escrow service.
						<br/><br/>
						Our smart contracts template uses blockchain technology to create
						a transparent and immutable record of all transactions. This
						ensures that both parties can have confidence in the integrity
						of the transaction and that funds are released only when the
						agreed-upon conditions are met.
					</p>

					<div className="btn-container">
						<button className="btn-gradient">
							Create new Escrow
						</button>

						<Link to={PATH_ESCROW_MANAGE}>
							<button className="btn-border-white">
								Manage your Escrow
							</button>
						</Link>
					</div>
				</div>
			</div>

			<div className="right-container">
				{
					PreviewBlocksData.map(elem => (
						<div className="block" key={elem.id}>
							<div className="inner">
								<h6 className={'gradient'}>{elem.step}</h6>
								<h5>{elem.title}</h5>
								<p className="small">{elem.text}</p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default PreviewBlocks;
