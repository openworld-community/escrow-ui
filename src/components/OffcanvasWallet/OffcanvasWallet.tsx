import React from 'react';
import {CloseButton, Offcanvas} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {switchShow} from "../../store/slices/offcanvasWalletSlice.ts";
import "./OffcanvasWallet.css";
import SelectWallet from "./components/SelectWallet/SelectWallet.tsx";
import UserProfile from "./components/UserProfile/UserProfile.tsx";

const OffcanvasWallet: React.FC = () => {

	const dispatch = useAppDispatch();
	const show = useAppSelector(state  => state.offcanvasWallet.show);
	const user = useAppSelector(state  => state.user.data);

	return (
		<Offcanvas
			show={show}
			onHide={() => dispatch(switchShow())}
			placement={"end"}
			className="OffcanvasWallet"
		>
			<div className="btn-slide" onClick={() => dispatch(switchShow())}>
				<img src={"/images/icons/right-arrow.svg"} alt={"close"} />
			</div>

			<div className="inner">
				<Offcanvas.Header>
					{!user && <h5>Connect a wallet</h5>}
					{user && <h5>User profile</h5>}
					<CloseButton onClick={() => dispatch(switchShow())} variant={"white"} />
				</Offcanvas.Header>

				<Offcanvas.Body>
					{!user && <SelectWallet />}
					{user && <UserProfile data={user} />}
				</Offcanvas.Body>

			</div>
		</Offcanvas>
	);
};

export default OffcanvasWallet;
