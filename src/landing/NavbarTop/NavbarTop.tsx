import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import "./NavbarTop.css";
import {
	PATH_LANDING,
	PATH_LANDING_COMMUNITY,
	PATH_LANDING_DEVELOPERS,
	PATH_LANDING_ECOSYSTEM,
	PATH_LANDING_FAQ
} from "../../constants/router.ts";

const NavbarTop: React.FC = () => {

	return (
		<div className={"NavbarTop"}>
			<Container>
				<Link to={PATH_LANDING}>
					<img src={"/images/logo.svg"} alt={"PEREDELANO"} className={"logo"} />
				</Link>

				<nav>
					<Link to={PATH_LANDING_ECOSYSTEM}>Ecosystem</Link>
					<Link to={PATH_LANDING_COMMUNITY}>Community</Link>
					<Link to={PATH_LANDING_DEVELOPERS}>Developers</Link>
					<Link to={PATH_LANDING_FAQ}>FAQ</Link>
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
