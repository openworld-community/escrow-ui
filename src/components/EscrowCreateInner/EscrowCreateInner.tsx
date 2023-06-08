import React from 'react';
import "./EscrowCreateInner.css";
import EscrowProgress from "../EscrowProgress/EscrowProgress.tsx";
import EscrowChat from "../EscrowChat/EscrowChat.tsx";

interface IEscrowCreateInner {
	children: React.ReactNode,
	title?: string,
	percentage: number,
}

const EscrowCreateInner: React.FC<IEscrowCreateInner> = ({ children, title, percentage }) => {
	return (
		<div className={"EscrowCreateInner"}>
			<div className="left">
				<div className="inner">
					<EscrowProgress percentage={percentage} />

					{title && <h2 className={"title"}>{title}</h2>}

					{children}
				</div>
			</div>

			{/*chat*/}
			<EscrowChat />
		</div>
	);
};

export default EscrowCreateInner;
