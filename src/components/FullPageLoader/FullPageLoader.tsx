import React from 'react';
import "./FullPageLoader.css";
import {Spinner} from "react-bootstrap";

const FullPageLoader: React.FC = () => {
	return (
		<div className={'FullPageLoader'}>
			<Spinner />
		</div>
	);
};

export default FullPageLoader;
