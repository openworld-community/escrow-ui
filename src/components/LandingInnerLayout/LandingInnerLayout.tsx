import React from 'react';
import "./LandingInnerLayout.css";
import NavbarTop from "../../landing/NavbarTop/NavbarTop.tsx";
import FooterBottom from "../../landing/FooterBottom/FooterBottom.tsx";
import {Container} from "react-bootstrap";

interface ILandingInnerLayout {
	children: React.ReactNode,
	className: string,
	header: {
		title?: string,
		topTitle: string,
		text?: string,
	}
}

const LandingInnerLayout: React.FC<ILandingInnerLayout> = ({ children, className, header }) => {
	return (
		<div className={"LandingInnerLayout " + className}>
			<NavbarTop />

			<Container className="content">

				<header>
					<p>{header.topTitle}</p>
					{header?.title && <h1>{header.title}</h1>}
					{header?.text && <h5>{header.text}</h5>}
				</header>


				{children}
			</Container>

			<FooterBottom />
		</div>
	);
};

export default LandingInnerLayout;
