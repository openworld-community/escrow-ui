import React from 'react';
import "./Preview.css";
import {Link} from "react-router-dom";
import {PATH_ESCROW} from "../../constants/router.ts";

const Preview: React.FC = () => {
	return (
		<div className={"Preview"}>
			<div className="content">
				<h1>
					<span>Make financial deals</span>
					fast and safe.
				</h1>

				<p>
					Our technology performing fast blockchain (120K TPS)
					and it has guaranteed AI-based data security.
					Proof of Stake, its consensus algorithm enables
					unlimited speeds.
				</p>

				<Link to={PATH_ESCROW}>
					<button className={"btn-border-gradient"}>
						Launch App
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Preview;
