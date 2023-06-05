import React from 'react';
import "./HistoryFilter.css";
import {HistoryFilterData} from "./HistoryFilterData.ts";

const HistoryFilter: React.FC = () => {
	return (
		<div className={"HistoryFilter"}>
			{
				HistoryFilterData.map(elem => (
					<div className={elem.active ? "block active" : "block"} key={elem.text}>
						<div className="inner" style={{ backgroundImage: `url(${elem.image})` }}>
							<span>{elem.title}</span>
							<h6>{elem.text}</h6>
						</div>
					</div>
				))
			}
		</div>
	);
};

export default HistoryFilter;
