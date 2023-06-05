import React from 'react';
import "./EscrowHistory.css";
import {Link} from "react-router-dom";
import {PATH_ESCROW} from "../../constants/router.ts";

const EscrowHistory: React.FC = () => {
	return (
		<div className={"EscrowHistory"}>
			<div className="inner">
				<Link to={PATH_ESCROW} className={"getBack"}>
					<img src="/images/icons/left-arrow.svg" alt="Get back"/>
					Get back
				</Link>

				<h1>Your Escrows</h1>
			</div>
		</div>
	);
};

export default EscrowHistory;
