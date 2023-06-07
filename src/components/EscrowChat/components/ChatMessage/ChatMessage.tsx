import React from 'react';
import "./ChatMessage.css";

interface IChatMessage {
	position: 'left' | 'right',
	text: string,
	date: string,
}

const ChatMessage: React.FC<IChatMessage> = ({ position, text, date }) => {
	return (
		<div className={`ChatMessage ${position}`}>
			<div className="message">
				<p>{text}</p>
				<p className="small date">{date}</p>
			</div>
		</div>
	);
};

export default ChatMessage;
