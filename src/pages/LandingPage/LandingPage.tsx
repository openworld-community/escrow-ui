import React from 'react';
import "./LandingPage.css";
import NavbarTop from "../../landing/NavbarTop/NavbarTop.tsx";
import Preview from "../../landing/Preview/Preview.tsx";
import QuantityTrades from "../../landing/QuantityTrades/QuantityTrades.tsx";
import Integrations from "../../landing/Integrations/Integrations.tsx";
import Developers from "../../landing/Developers/Developers.tsx";
import Community from "../../landing/Community/Community.tsx";
import FooterBottom from "../../landing/FooterBottom/FooterBottom.tsx";
import BgImageNetDev from "../BgImageNetDev/BgImageNetDev.tsx";

const LandingPage: React.FC = () => {
	return (
		<div className={"LandingPage"}>
			<NavbarTop />
			<Preview />
			<QuantityTrades />
			<BgImageNetDev>
				<Integrations />
				<Developers />
			</BgImageNetDev>
			<Community />
			<FooterBottom />
		</div>
	);
};

export default LandingPage;
