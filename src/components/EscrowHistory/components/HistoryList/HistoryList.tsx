import React from 'react';
import "./HistoryList.css";
import {HistoryListData} from "./HistoryListData.ts";
import HistoryItem from "../HistoryItem/HistoryItem.tsx";

const HistoryList: React.FC = () => {
	return (
		<div className={"HistoryList"}>
			{
				HistoryListData.map(elem => (
					<HistoryItem key={elem.status} data={elem} />
				))
			}
		</div>
	);
};

export default HistoryList;
