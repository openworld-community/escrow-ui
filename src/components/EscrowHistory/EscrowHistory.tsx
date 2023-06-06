import React from 'react';
import "./EscrowHistory.css";
import HistoryFilter from "./components/HistoryFilter/HistoryFilter.tsx";
import HistoryList from "./components/HistoryList/HistoryList.tsx";
import LinkBack from "../LinkBack/LinkBack.tsx";

const EscrowHistory: React.FC = () => {
	return (
		<div className={"EscrowHistory"}>
			<div className="inner">
				<LinkBack />

				<h1>Your Escrows</h1>

				<HistoryFilter />
				<HistoryList />
			</div>
		</div>
	);
};

export default EscrowHistory;
