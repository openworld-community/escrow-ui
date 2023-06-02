import React from 'react';
import "./EscrowPage.css";
import NavbarEscrow from "../../components/NavbarEscrow/NavbarEscrow.tsx";
import OffcanvasWallet from "../../components/OffcanvasWallet/OffcanvasWallet.tsx";

const EscrowPage: React.FC = () => {
	return (
		<div className={"EscrowPage"}>
			<NavbarEscrow />
			<OffcanvasWallet />
		</div>
	);
};

export default EscrowPage;
