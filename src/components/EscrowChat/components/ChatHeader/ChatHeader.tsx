import React from 'react';
import "./ChatHeader.css";

const ChatHeader: React.FC = () => {
	return (
		<header className={"ChatHeader"}>
			<div className="user">
				<img
					src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1044"
					alt="Seller image"
				/>
				<p>
					0x09Y7...11X2
					<span>Seller's</span>
				</p>
			</div>

			<img src="/images/icons/three-dots.svg" alt="More info"/>
		</header>
	);
};

export default ChatHeader;
