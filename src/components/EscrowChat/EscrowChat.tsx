import React from 'react';
import "./EscrowChat.css";
import ChatHeader from "./components/ChatHeader/ChatHeader.tsx";
import ChatFooter from "./components/ChatFooter/ChatFooter.tsx";
import ChatBody from "./components/ChatBody/ChatBody.tsx";

const EscrowChat: React.FC = () => {
	return (
		<div className={"EscrowChat"}>
			<ChatHeader />

			<ChatBody />

			<ChatFooter />
		</div>
	);
};

export default EscrowChat;
