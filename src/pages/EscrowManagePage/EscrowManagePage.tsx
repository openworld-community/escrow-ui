import React from 'react';
import "./EscrowManagePage.css";
import EscrowHistory from "../../components/EscrowHistory/EscrowHistory.tsx";
import EscrowContainer from "../../components/EscrowContainer/EscrowContainer.tsx";

const EscrowManagePage: React.FC = () => {
	return (
		<EscrowContainer className={'EscrowManagePage'}>
			<EscrowHistory />
		</EscrowContainer>
	);
};

export default EscrowManagePage;
