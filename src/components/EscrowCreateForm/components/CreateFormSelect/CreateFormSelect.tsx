import React from 'react';
import "./CreateFormSelect.css";

interface ISelect {
	title: string,
	value: string,
	active: boolean
}

interface ICreateFormSelect {
	data: ISelect[],
}

const CreateFormSelect: React.FC<ICreateFormSelect> = ({ data }) => {
	return (
		<div className={"CreateFormSelect"}>
			{
				data.map(elem => (
					<button key={elem.value} disabled={elem.active}>
						<div className="inner-btn">
							{elem.title}
						</div>
					</button>
				))
			}
		</div>
	);
};

export default CreateFormSelect;
