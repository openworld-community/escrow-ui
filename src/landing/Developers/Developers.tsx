import React from 'react';
import "./Developers.css";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Developers: React.FC = () => {
	return (
		<Container className={"Developers"}>
			<Link to={"/"}>
				DEVELOPERS
				<img src={"/images/icons/right-arrow.svg"} alt={"developers"} />
			</Link>

			<div className={"blocks-container"}>
				<div className="block left">
					<h1>Superpowers for DeFi developers.</h1>
					<h5>
						Build Defi apps and tools on the largest crypto project
						on Ethereum. Get started with quick start guides,
						protocol documentation, a Javascript SDK, and
						fully open source code.
					</h5>
				</div>

				<div className="block right">
					<h3>Apply for funding from the Uniswap Grants Program.</h3>
					<h5>
						Get paid to build the future of finance. Uniswap
						Governance offers grant funding for people building
						apps, tools, and activities on the Uniswap Protocol.
					</h5>
					<button className={"btn-border-gradient"}>
						Learn more
					</button>
				</div>
			</div>
		</Container>
	);
};

export default Developers;
