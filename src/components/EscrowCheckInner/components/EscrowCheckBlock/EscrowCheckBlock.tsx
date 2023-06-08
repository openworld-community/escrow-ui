import React from 'react';
import "./EscrowCheckBlock.css";
import {getCutString} from "../../../../functions/getCutString.ts";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {OverlayChildren} from "react-bootstrap/Overlay";
import useCopyToClipboard from "../../../../hooks/useCopyToClipboard.ts";

interface IEscrowCheckBlock {
	label: string;
	value: string;
}

const EscrowCheckBlock: React.FC<IEscrowCheckBlock> = ({ label, value }) => {

	const [copiedText, handleCopy] = useCopyToClipboard();

	const getTooltip = (value: string): OverlayChildren => {
		return (
			<Tooltip>
				{value} <br/>
				{copiedText ? '(Copied!)' : '(Click to copy!)'}
			</Tooltip>
		)
	}

	return (
		<div className={"EscrowCheckBlock"}>
			<div className="line" />
			<div className="content">
				<p>{label}</p>
				<OverlayTrigger overlay={getTooltip(value)}>
					<p onClick={() => handleCopy(value)} className={"dark"}>
						{getCutString(value, 20)}
					</p>
				</OverlayTrigger>
			</div>
		</div>
	);
};

export default EscrowCheckBlock;
