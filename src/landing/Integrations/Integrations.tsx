import React from 'react';
import "./Integrations.css";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {PATH_ESCROW} from "../../constants/router.ts";

const Integrations: React.FC = () => {
	return (
		<div className={"Integrations"}>
			<img src="/images/backgrounds/integrations.svg" alt="PEREDELANO" className={"bg"}/>

			<Container>
				<div className="content">
					<Link to={PATH_ESCROW}>
						PEREDELANO ECOSYSTEM
						<img src={"/images/icons/right-arrow.svg"} alt={"PEREDELANO ECOSYSTEM"} />
					</Link>
					<h1>A growing network of DeFi Apps.</h1>
					<h5>
						Developers, traders, and liquidity providers participate
						together in a financial marketplace that is open
						and accessible to all.
					</h5>
				</div>
			</Container>
		</div>
	);
};

export default Integrations;
