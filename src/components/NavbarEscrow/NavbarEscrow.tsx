import React from 'react';
import "./NavbarEscrow.css";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../store/store.ts";
import {switchShow} from "../../store/slices/offcanvasWalletSlice.ts";
import LangDropdown from "../LangDropdown/LangDropdown.tsx";

const NavbarEscrow: React.FC = () => {

	const dispatch = useAppDispatch();

	return (
		<nav className={"NavbarEscrow"}>
			<div className="left">
				<img src="/images/logo.svg" alt="PEREDELANO ESCROW" className={"logo"} />

				<div className={"links-container"}>
					<Link to={"/"}>Ecosystem</Link>
					<Link to={"/"}>Community</Link>
					<Link to={"/"}>Governance</Link>
					<Link to={"/"}>Developers</Link>
					<Link to={"/"}>FAQ</Link>
				</div>
			</div>

			<div className="right">
				<LangDropdown />
				<button onClick={() => dispatch(switchShow())} className="btn-border-gradient">
					Connect Wallet
				</button>
			</div>
		</nav>
	);
};

export default NavbarEscrow;
