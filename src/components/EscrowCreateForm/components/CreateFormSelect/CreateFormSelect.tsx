import React from 'react';
import "./CreateFormSelect.css";
import {ISelectRole} from "../../data/RoleData.ts";

interface ICreateFormSelect {
	data: ISelectRole[],
	handleChange?: (value: any) => void,
	activeValue?: string,
}

const CreateFormSelect: React.FC<ICreateFormSelect> = ({ data, handleChange, activeValue }) => {
	return (
		<div className={"CreateFormSelect"}>
			{
				data.map(elem => (
					handleChange ?
						<button
							//@ts-ignore
							onClick={() => handleChange(elem.value)}
							key={elem.value}
							disabled={elem.value === activeValue}
						>
							<div className="inner-btn">{elem.title}</div>
						</button>:
						<button type={"button"} key={elem.value} disabled={false} className={"banned"}>
							<div className="inner-btn">{elem.title}</div>
						</button>
				))
			}
		</div>
	);
};

export default CreateFormSelect;
