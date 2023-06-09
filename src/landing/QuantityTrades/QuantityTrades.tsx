import React from 'react';
import "./QuantityTrades.css";
import {Container} from "react-bootstrap";

const QuantityTrades: React.FC = () => {

	const data = [
		{
			title: "$1.4T+",
			text: "Trade Volume",
		},
		{
			title: "151M+",
			text: "All Time Trades",
		},
		{
			title: "20+",
			text: "Integrations",
		},
		{
			title: "4.400+",
			text: "Community Delegates",
		},
	];

	return (
		<Container className={"QuantityTrades"}>
			{
				data.map(elem => (
					<div className={"block"} key={elem.title}>
						<span>{elem.title}</span>
						<p>{elem.text}</p>
					</div>
				))
			}
		</Container>
	);
};

export default QuantityTrades;
