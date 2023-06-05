import React from 'react';
import "./HistoryItem.css";

interface IHistoryItem {
	data: any,
}

const HistoryItem: React.FC<IHistoryItem> = ({ data }) => {
	return (
		<div className={"HistoryItem"}>
			<div className="left">
				<div className="user">
					<img src={data.user1.img} alt=""/>
					<p>{data.user1.address}</p>
				</div>

				<img src="/images/icons/arrow-circle.svg" alt="arrow" className={"arrow"} />

				<div className="user">
					<img src={data.user1.img} alt=""/>
					<p>{data.user1.address}</p>
				</div>

				<div className="options">
					<p>Select Role <span>{data.role}</span></p>
					<p>Select Role <span>{data.value}</span></p>
					<p>Select Role <span>{data.unit}</span></p>
					<p>Select Role <span>{data.fee}</span></p>
				</div>
			</div>

			<p className={"status " + data.status.toLowerCase()}>
				{data.status}
			</p>
		</div>
	);
};

export default HistoryItem;
