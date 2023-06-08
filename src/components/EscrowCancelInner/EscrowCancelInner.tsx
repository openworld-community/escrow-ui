import React from 'react';
import "./EscrowCancelInner.css";
import {Link} from "react-router-dom";

interface IEscrowCancelInner {
	title: string,
	text: string,
	button: {
		link: string,
		text: string,
	}
}

const EscrowCancelInner: React.FC<IEscrowCancelInner> = ({ title, button, text }) => {
	return (
		<div className={"EscrowCancelInner"}>
			<div className={"text-container"}>
				<h2>{title}</h2>
				<h5>{text}</h5>
			</div>

			<Link to={button.link}>
				<button className={"btn-gradient"}>
					{button.text}
				</button>
			</Link>
		</div>
	);
};

export default EscrowCancelInner;
