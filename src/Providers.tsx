import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.tsx";
import "./styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./i18n/i18n.ts";
import NavbarTop from "./components/NavbarTop/NavbarTop.tsx";
import {useTranslation} from "react-i18next";
import FullPageLoader from "./components/FullPageLoader/FullPageLoader.tsx";

const Providers = () => {

	const { ready } = useTranslation();

	if (!ready) return <FullPageLoader />;

	return (
		<React.StrictMode>
			<BrowserRouter>
				<NavbarTop />
				<Router />
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default Providers;
