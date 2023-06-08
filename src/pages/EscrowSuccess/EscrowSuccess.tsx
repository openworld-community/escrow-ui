import React from 'react';
import EscrowCreateInner from "../../components/EscrowCreateInner/EscrowCreateInner.tsx";
import EscrowCancelInner from "../../components/EscrowCancelInner/EscrowCancelInner.tsx";
import {PATH_ESCROW_CREATE} from "../../constants/router.ts";
import EscrowContainer from "../../components/EscrowContainer/EscrowContainer.tsx";

const EscrowSuccess: React.FC = () => {
	return (
		<EscrowContainer className={"EscrowCancel"}>
			<EscrowCreateInner
				percentage={100}
			>
				<EscrowCancelInner
					title={"Deal has been completed successfully"}
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

export default EscrowSuccess;
