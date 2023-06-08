import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import "./NavbarTop.css";

const NavbarTop: React.FC = () => {
	return (
		<div className={"NavbarTop"}>
			<Container>
				<img src={"/images/logo.svg"} alt={"PEREDELANO"} className={"logo"} />

				<nav>
					<Link to={"/"}>Ecosystem</Link>
					<Link to={"/"}>Community</Link>
					<Link to={"/"}>Developers</Link>
					<Link to={"/"}>FAQ</Link>
				</nav>

				<div className="socila-icons">
					<a href="#" target={"_blank"} rel={"noreferrer"}>
						<img src="/images/icons/social/twitter.svg" alt="twitter"/>
					</a>
					<a href="#" target={"_blank"} rel={"noreferrer"}>
						<img src="/images/icons/social/reddit.svg" alt="reddit"/>
					</a>
					<a href="#" target={"_blank"} rel={"noreferrer"}>
						<img src="/images/icons/social/github.svg" alt="github"/>
					</a>
					<a href="#" target={"_blank"} rel={"noreferrer"}>
						<img src="/images/icons/social/discord.svg" alt="discord"/>
					</a>
				</div>
			</Container>
		</div>
	);
};

export default NavbarTop;
