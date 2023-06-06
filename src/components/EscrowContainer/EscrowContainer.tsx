import React from 'react';
import "./EscrowContainer.css";
import NavbarEscrow from "../NavbarEscrow/NavbarEscrow.tsx";
import OffcanvasWallet from "../OffcanvasWallet/OffcanvasWallet.tsx";

interface EscrowContainer {
	children: React.ReactNode,
	className?: string,
}

const EscrowContainer: React.FC<EscrowContainer> = ({ children, className }) => {
	return (
		<div className={`EscrowContainer ${className ? className : ''}`}>
			<NavbarEscrow />
			<OffcanvasWallet />

			{children}
		</div>
	);
};

export default EscrowContainer;
