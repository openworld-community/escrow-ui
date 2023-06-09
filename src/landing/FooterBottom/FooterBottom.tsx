import React from 'react';
import "./FooterBottom.css";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {
	PATH_LANDING_COMMUNITY,
	PATH_LANDING_DEVELOPERS,
	PATH_LANDING_ECOSYSTEM,
	PATH_LANDING_FAQ
} from "../../constants/router.ts";

const FooterBottom: React.FC = () => {
	return (
		<Container className={"FooterBottom"}>
			<div className="top">
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
			</div>

			<div className="bottom">
				<p>
					Media inquires for Peredelano - Contact
					<a href={"/"}>peredelano-media@peredelano.ru</a>
				</p>
			</div>
		</Container>
	);
};

export default FooterBottom;
