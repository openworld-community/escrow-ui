import React from 'react';
import EscrowCreateInner from "../../components/EscrowCreateInner/EscrowCreateInner.tsx";
import EscrowContainer from "../../components/EscrowContainer/EscrowContainer.tsx";
import EscrowCancelInner from "../../components/EscrowCancelInner/EscrowCancelInner.tsx";
import {PATH_ESCROW_CREATE} from "../../constants/router.ts";

const EscrowCancel: React.FC = () => {
	return (
		<EscrowContainer className={"EscrowCancel"}>
			<EscrowCreateInner
				percentage={20}
			>
				<EscrowCancelInner
					title={"The deal fell through..."}
					text={"Waiting when you will create new Escrow :)"}
					button={{
						link: PATH_ESCROW_CREATE,
						text: "Create new Escrow",
					}}
				/>
			</EscrowCreateInner>
		</EscrowContainer>
	);
};

export default EscrowCancel;
