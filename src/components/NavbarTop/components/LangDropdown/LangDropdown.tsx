// import React from 'react';
import {Dropdown, Spinner} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {I18N_LANGS} from "../../../../constants/i18n.ts";
import "./LangDropdown.css";

const LangDropdown = () => {

	const { t, i18n } = useTranslation();
	const [load, setLoad] = useState<boolean>(false);
	console.log(i18n)

	const setLang = (lng: string) => {
		setLoad(true)
		i18n.changeLanguage(lng).finally(() => setLoad(false));
	};

	return (
		<Dropdown className={'LangDropdown'} align={'end'}>
			<Dropdown.Toggle size={'sm'} disabled={load}>
				{load ? <Spinner size={'sm'} /> : t('general.lang_title').toUpperCase()}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{
					I18N_LANGS
						.filter(elem => elem.value !== i18n.language)
						.map(elem => (
						<Dropdown.Item key={elem.value} onClick={() => setLang(elem.value)}>
							{elem.title}
						</Dropdown.Item>
					))
				}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default LangDropdown;
