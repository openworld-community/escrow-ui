import React from 'react';
import EscrowContainer from "../../components/EscrowContainer/EscrowContainer.tsx";
import EscrowCreateInner from "../../components/EscrowCreateInner/EscrowCreateInner.tsx";
import {useParams} from "react-router-dom";
import EscrowCheckInner from "../../components/EscrowCheckInner/EscrowCheckInner.tsx";
import {TPerson} from "../../types/general.ts";

const EscrowCheck: React.FC = () => {

	const { person } = useParams<{ person?: TPerson }>();

	return (
		<EscrowContainer className={"EscrowCheck"}>
			<EscrowCreateInner
				percentage={20}
				title={person === "seller" ? "Review of the final Escrow" : "Waiting when partner deploy Escrow"}
			>
				<EscrowCheckInner person={person} />
			</EscrowCreateInner>
		</EscrowContainer>
	);
};

export default EscrowCheck;
