import React from 'react';
import "./Preview.css";

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

				<button className={"btn-border-gradient"}>
					Launch App
				</button>
			</div>
		</div>
	);
};

export default Preview;
