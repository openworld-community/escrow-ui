import React from 'react';
import {Link} from "react-router-dom";
import "./LinkBack.css";

interface ILinkBack {
	link?: string,
	className?: string,
}

const LinkBack: React.FC<ILinkBack> = ({ link, className }) => {
	return (
		// @ts-ignore
		<Link to={link ? link : -1} className={`LinkBack ${className ? className : ''}`}>
			<img src="/images/icons/left-arrow.svg" alt="Get back"/>
			Get back
		</Link>
	);
};

export default LinkBack;
