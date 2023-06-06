import React from 'react';
import {ProgressBar} from "react-bootstrap";
import "./EscrowProgress.css";
import {EscrowProgressData} from "./EscrowProgressData.ts";

interface IEscrowProgress {
	percentage: number;
}

const EscrowProgress: React.FC<IEscrowProgress> = ({ percentage }) => {

	const getActive = (value:number): '' | 'active' => {
		if (value === percentage || value < percentage) return 'active';
		return '';
	}

	return (
		<div className={"EscrowProgress"}>
			<ProgressBar now={percentage} />

			<div className="step-container">
				{
					EscrowProgressData.map(elem => (
						<div key={elem.percent} className={`step ${getActive(elem.percent)}`}>
							<div className="line" />
							<p className={"small"}>{elem.title}</p>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default EscrowProgress;
