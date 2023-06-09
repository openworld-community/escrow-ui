import React from 'react';
import "./BgImageNetDev.css";

interface IBgImageNetDev {
	children: React.ReactNode,
}

const BgImageNetDev: React.FC<IBgImageNetDev> = ({ children }) => {
	return (
		<div className={"BgImageNetDev"}>
			{children}
		</div>
	);
};

export default BgImageNetDev;
