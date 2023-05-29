// import React from 'react';
import {Route, Routes} from "react-router-dom";
import {PATH_HOME} from "./constants/router.ts";
import HomePage from "./pages/HomePage/HomePage.tsx";
import {IRoute} from "./types/router.ts";

const Router = () => {

	const dataRouter: IRoute[] = [
		{
			path: PATH_HOME,
			element: <HomePage />,
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
