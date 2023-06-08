import React from 'react';
import "./EscrowCheckInner.css";
import {TPerson} from "../../types/general.ts";
import EscrowCheckBlock from "./components/EscrowCheckBlock/EscrowCheckBlock.tsx";

interface IEscrowCheckInner {
	person: TPerson,
}

const EscrowCheckInner: React.FC<IEscrowCheckInner> = ({ person }) => {
	return (
		<div className={"EscrowCheckInner"}>

			<div className="blocks-container">
				<div className="col">
					<EscrowCheckBlock
						label={"Your Role"}
						value={"Seller"}
					/>
					<EscrowCheckBlock
						label={"Fee"}
						value={"50/50"}
					/>
					<EscrowCheckBlock
						label={"Seller Address"}
						value={"bc1qgdjqv0av3q56jvd82tkdjpy7gdp9ut8tlqmgrpmv24sq90ecnvqqjwvw97"}
					/>
				</div>

				<div className="col">
					<EscrowCheckBlock
						label={"Value"}
						value={"0.783"}
					/>
					<EscrowCheckBlock
						label={"Fee payment"}
						value={"0.36515 ETH"}
					/>
					<EscrowCheckBlock
						label={"Bayer Address"}
						value={"34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo"}
					/>
				</div>

				<div className="col">
					<EscrowCheckBlock
						label={"Unit"}
						value={"Ethereum"}
					/>
					<EscrowCheckBlock
						label={"Auto Release Wait Days"}
						value={"5 days"}
					/>
					<EscrowCheckBlock
						label={"Network"}
						value={"Ethereum"}
					/>
				</div>
			</div>

			<div className="btns-container">
				{
					person === "seller" ?
						<>
							<button className={"btn-border-white"}>
								Change
							</button>
							<button className={"btn-gradient"}>
								Deploy Escrow
							</button>
						</>:
						<>
							<button className={"btn-border-white"}>
								Reject
							</button>
							<button className={"btn-gradient"}>
								Send payment
							</button>
						</>
				}
			</div>
		</div>
	);
};

export default EscrowCheckInner;
