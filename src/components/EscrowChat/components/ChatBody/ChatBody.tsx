import React from 'react';
import "./ChatBody.css";
import ChatMessage from "../ChatMessage/ChatMessage.tsx";

const ChatBody: React.FC = () => {
	return (
		<div className={"ChatBody"}>

			<ChatMessage
				position={"right"}
				text={"Hello, my name is Kirill!"}
				date={"11:31 AM"}
			/>

			<ChatMessage
				position={"right"}
				text={"I want buy your USDT"}
				date={"11:32 AM"}
			/>

			<ChatMessage
				position={"left"}
				text={"Hello Kirill, sosi hui."}
				date={"11:34 AM"}
			/>

			<ChatMessage
				position={"left"}
				text={"Ahahahhaha looooooser!"}
				date={"11:37 AM"}
			/>

			<ChatMessage
				position={"right"}
				text={"Sam sosi"}
				date={"11:37 AM"}
			/>

		</div>
	);
};

export default ChatBody;
