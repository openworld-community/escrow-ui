import React from 'react';
import "./ChatFooter.css";
import {Form} from "react-bootstrap";

const ChatFooter: React.FC = () => {
	return (
		<footer className={"ChatFooter"}>
			<Form>
				<input placeholder={"Start typing..."} type="text"/>
				<button type={"submit"}>
					<img src="/images/icons/send-msg.svg" alt="send"/>
				</button>
			</Form>
		</footer>
	);
};

export default ChatFooter;
