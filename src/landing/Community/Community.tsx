import React from 'react';
import "./Community.css";
import {Container} from "react-bootstrap";
import {CommunityData} from "./CommunityData.ts";

const Community: React.FC = () => {
	return (
		<Container className={"Community"}>
			<div className="text-container">
				<h2>
					The Uniswap community is an ecosystem of users,
					developers, designers, and educators
				</h2>
				<h5>
					Peredelano global and vibrant community drives the
					success of the Protocol. Join the conversation on
					Discord, Twitter, GitHub, and Reddit to stay up
					to date on the latest community news.
				</h5>
			</div>

			<div className="blocks-container">
				{
					CommunityData.map(elem => (
						<a href={"/"} className={"block"} key={elem.title}>
							<div className={"left"}>
								<img className={"icon"} src={elem.img} alt={elem.title} />
								<h5>{elem.title}</h5>
							</div>

							<img
								className={"arrow"}
								src="/images/icons/arrow-right-white.svg"
								alt={elem.title}
							/>
						</a>
					))
				}
			</div>
		</Container>
	);
};

export default Community;
