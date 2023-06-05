import React from 'react';
import "./EscrowManagePage.css";
import NavbarEscrow from "../../components/NavbarEscrow/NavbarEscrow.tsx";
import OffcanvasWallet from "../../components/OffcanvasWallet/OffcanvasWallet.tsx";
import EscrowHistory from "../../components/EscrowHistory/EscrowHistory.tsx";

const EscrowManagePage: React.FC = () => {
	return (
		<div className={"EscrowManagePage"}>
			<NavbarEscrow />
			<OffcanvasWallet />
			<EscrowHistory />
		</div>
	);
};

export default EscrowManagePage;
