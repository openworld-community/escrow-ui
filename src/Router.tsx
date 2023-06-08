import React from 'react';
import {Route, Routes} from "react-router-dom";
import {
	PATH_ESCROW, PATH_ESCROW_CANCEL,
	PATH_ESCROW_CHECK,
	PATH_ESCROW_CREATE,
	PATH_ESCROW_MANAGE, PATH_ESCROW_SUCCESS,
	PATH_LANDING
} from "./constants/router.ts";
import EscrowPage from "./pages/EscrowPage/EscrowPage.tsx";
import {IRoute} from "./types/router.ts";
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import EscrowManagePage from "./pages/EscrowManagePage/EscrowManagePage.tsx";
import EscrowCreate from "./pages/EscrowCreate/EscrowCreate.tsx";
import EscrowCheck from "./pages/EscrowCheck/EscrowCheck.tsx";
import EscrowCancel from "./pages/EscrowCancel/EscrowCancel.tsx";
import EscrowSuccess from "./pages/EscrowSuccess/EscrowSuccess.tsx";

const Router: React.FC = () => {

	const dataRouter: IRoute[] = [
		{
			path: PATH_LANDING,
			element: <LandingPage />,
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
