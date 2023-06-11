import React from 'react';
import {CloseButton, Offcanvas} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {switchShow} from "../../store/slices/offcanvasWalletSlice.ts";
import "./OffcanvasWallet.css";
import SelectWallet from "./components/SelectWallet/SelectWallet.tsx";

// let web3: Web3 | undefined = undefined;

const OffcanvasWallet: React.FC = () => {

	// const [loader, setLoader] = useState<boolean>(false);

	const dispatch = useAppDispatch();
	const show = useAppSelector(state  => state.offcanvasWallet.show);

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
					<h5>Connect a wallet</h5>
					<CloseButton onClick={() => dispatch(switchShow())} variant={"white"} />
				</Offcanvas.Header>

				<Offcanvas.Body>
					<SelectWallet />
				</Offcanvas.Body>

			</div>
		</Offcanvas>
	);
};

export default OffcanvasWallet;
