import React from 'react';
import "./EscrowPage.css";
import PreviewBlocks from "../../components/PreviewBlocks/PreviewBlocks.tsx";
import EscrowContainer from "../../components/EscrowContainer/EscrowContainer.tsx";

const EscrowPage: React.FC = () => {
	return (
		<EscrowContainer className={"EscrowPage"}>
			<PreviewBlocks />
		</EscrowContainer>
	);
};

export default EscrowPage;
