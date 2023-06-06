import React from 'react';
import EscrowContainer from "../../components/EscrowContainer/EscrowContainer.tsx";
import EscrowCreateInner from "../../components/EscrowCreateInner/EscrowCreateInner.tsx";
import EscrowCreateForm from "../../components/EscrowCreateForm/EscrowCreateForm.tsx";

const EscrowCreate: React.FC = () => {
	return (
		<EscrowContainer className={"EscrowCreate"}>
			<EscrowCreateInner
				percentage={20}
				title={"Create new Escrow contract"}
			>
				<EscrowCreateForm />
			</EscrowCreateInner>
		</EscrowContainer>
	);
};

export default EscrowCreate;
