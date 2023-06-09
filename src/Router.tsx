import React from 'react';
import {Route, Routes} from "react-router-dom";
import {
	PATH_ESCROW, PATH_ESCROW_CANCEL,
	PATH_ESCROW_CHECK,
	PATH_ESCROW_CREATE,
	PATH_ESCROW_MANAGE, PATH_ESCROW_SUCCESS,
	PATH_LANDING, PATH_LANDING_COMMUNITY, PATH_LANDING_DEVELOPERS, PATH_LANDING_ECOSYSTEM, PATH_LANDING_FAQ
} from "./constants/router.ts";
import EscrowPage from "./pages/EscrowPage/EscrowPage.tsx";
import {IRoute} from "./types/router.ts";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import EscrowManagePage from "./pages/EscrowManagePage/EscrowManagePage.tsx";
import EscrowCreate from "./pages/EscrowCreate/EscrowCreate.tsx";
import EscrowCheck from "./pages/EscrowCheck/EscrowCheck.tsx";
import EscrowCancel from "./pages/EscrowCancel/EscrowCancel.tsx";
import EscrowSuccess from "./pages/EscrowSuccess/EscrowSuccess.tsx";
import LandingInnerLayout from "./components/LandingInnerLayout/LandingInnerLayout.tsx";
import useScrollTop from "./hooks/useScrollToTop.ts";

const Router: React.FC = () => {

	const dataRouter: IRoute[] = [
		{
			path: PATH_LANDING,
			element: <LandingPage />,
		},
		{
			path: PATH_LANDING_ECOSYSTEM,
			element:
				<LandingInnerLayout
					className={"LandingEcosystem"}
					header={{
						text: "Swap, earn, vote, and more with hundreds of DeFi apps.",
						title: "Explore the Uniswap Ecosystem.",
						topTitle: "ECOSYSTEM",
					}}
				>
				</LandingInnerLayout>,
		},
		{
			path: PATH_LANDING_COMMUNITY,
			element:
				<LandingInnerLayout
					className={"LandingCommunity"}
					header={{
						text: "Uniswap’s global and vibrant community drives the success of the Protocol. Join the conversation on Discord, Twitter, and Reddit to stay up to date on the latest community news.",
						title: "The Uniswap community is an ecosystem of users, developers, designers, and educators.",
						topTitle: "COMMUNITY",
					}}
				>
				</LandingInnerLayout>,
		},
		{
			path: PATH_LANDING_DEVELOPERS,
			element:
				<LandingInnerLayout
					className={"LandingDevelopers"}
					header={{
						topTitle: "DEVELOPERS",
					}}
				>
				</LandingInnerLayout>,
		},
		{
			path: PATH_LANDING_FAQ,
			element:
				<LandingInnerLayout
					className={"LandingFAQ"}
					header={{
						title: "Frequently Asked Questions.",
						topTitle: "FAQ",
					}}
				>
				</LandingInnerLayout>,
		},
		{
			path: PATH_ESCROW,
			element: <EscrowPage />,
		},
		{
			path: PATH_ESCROW_MANAGE,
			element: <EscrowManagePage />,
		},
		{
			path: PATH_ESCROW_CREATE,
			element: <EscrowCreate />,
		},
		{
			path: PATH_ESCROW_CHECK,
			element: <EscrowCheck />,
		},
		{
			path: PATH_ESCROW_CANCEL,
			element: <EscrowCancel />,
		},
		{
			path: PATH_ESCROW_SUCCESS,
			element: <EscrowSuccess />,
		},
	];

	//for scroll to top when we set new page
	useScrollTop();

	return (
		<Routes>
			{
				dataRouter.map(elem => (
					<Route key={elem.path} path={elem.path} element={elem.element} />
				))
			}
		</Routes>
	);
};

export default Router;
