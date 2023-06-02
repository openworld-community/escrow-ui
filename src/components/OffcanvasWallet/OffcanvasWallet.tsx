import React from 'react';
import {CloseButton, Offcanvas} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {switchShow} from "../../store/slices/offcanvasWalletSlice.ts";
import "./OffcanvasWallet.css";

const OffcanvasWallet: React.FC = () => {

	const dispatch = useAppDispatch();
	const show = useAppSelector(state  => state.offcanvasWallet.show);

	return (
		<Offcanvas
			show={show}
			onHide={() => dispatch(switchShow())}
			placement={"end"}
			className="OffcanvasWallet"
		>
			<Offcanvas.Header>
				<Offcanvas.Title>Connect a wallet</Offcanvas.Title>
				<CloseButton onClick={() => dispatch(switchShow())} variant={"white"} />
			</Offcanvas.Header>
			<Offcanvas.Body>
				Some text as placeholder. In real life you can have the elements you
				have chosen. Like, text, images, lists, etc.
			</Offcanvas.Body>
		</Offcanvas>
	);
};

export default OffcanvasWallet;
