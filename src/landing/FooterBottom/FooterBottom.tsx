import React from 'react';
import "./FooterBottom.css";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const FooterBottom: React.FC = () => {
	return (
		<Container className={"FooterBottom"}>
			<div className="top">
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
