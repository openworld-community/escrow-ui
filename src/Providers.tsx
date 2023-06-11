import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.tsx";
import "./i18n/i18n.ts";
import {useTranslation} from "react-i18next";
import FullPageLoader from "./components/FullPageLoader/FullPageLoader.tsx";
import {Provider} from "react-redux";
import store, {persistedStore} from "./store/store.ts";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import "./styles/components/buttons.css";
import "./styles/components/dropdown.css";
import "./styles/components/form.css";
import {PersistGate} from "redux-persist/integration/react";

const Providers = () => {

	const { ready } = useTranslation()

	if (!ready) return <FullPageLoader />;

	return (
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<PersistGate persistor={persistedStore}>
						<Router />
					</PersistGate>
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default Providers;
