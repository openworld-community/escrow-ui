import React from 'react';
import "./LandingPage.css";
import NavbarTop from "../../landing/NavbarTop/NavbarTop.tsx";
import Preview from "../../landing/Preview/Preview.tsx";

const LandingPage: React.FC = () => {
	return (
		<div className={"LandingPage"}>
			<NavbarTop />
			<Preview />
		</div>
	);
};

export default LandingPage;
