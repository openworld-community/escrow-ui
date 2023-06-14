import React from 'react';
import "./NavbarEscrow.css";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {switchShow} from "../../store/slices/offcanvasWalletSlice.ts";
import LangDropdown from "../LangDropdown/LangDropdown.tsx";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown.tsx";
import {
	PATH_ESCROW,
	PATH_LANDING_COMMUNITY,
	PATH_LANDING_DEVELOPERS,
	PATH_LANDING_ECOSYSTEM, PATH_LANDING_FAQ
} from "../../constants/router.ts";

const NavbarEscrow: React.FC = () => {

	const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.user.data);

	return (
		<nav className={"NavbarEscrow"}>
			<div className="left">
				<Link to={PATH_ESCROW}>
					<img src="/images/logo.svg" alt="PEREDELANO ESCROW" className={"logo"} />
				</Link>

				<div className={"links-container"}>
					<Link to={PATH_LANDING_ECOSYSTEM}>Ecosystem</Link>
					<Link to={PATH_LANDING_COMMUNITY}>Community</Link>
					<Link to={PATH_LANDING_DEVELOPERS}>Developers</Link>
					<Link to={PATH_LANDING_FAQ}>FAQ</Link>
				</div>
			</div>

			<div className="right">
				<NetworkDropdown />
				<LangDropdown />
				{
					user ?
						<button onClick={() => dispatch(switchShow())} className={"user"}>
							<img src={user.avatar} alt={user.username}/>
							<p>{user.address?.toUpperCase()}</p>
						</button>:
						<button onClick={() => dispatch(switchShow())} className="btn-border-gradient">
							Connect Wallet
						</button>
				}
			</div>
		</nav>
	);
};

export default NavbarEscrow;
