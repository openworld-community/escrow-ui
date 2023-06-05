// import React from 'react';
import {Dropdown, Spinner} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {I18N_LANGS} from "../../constants/i18n.ts";
import "./LangDropdown.css";

const LangDropdown = () => {

	const { t, i18n } = useTranslation();
	const [load, setLoad] = useState<boolean>(false);

	const setLang = (lng: string) => {
		setLoad(true)
		i18n.changeLanguage(lng).finally(() => setLoad(false));
	};

	return (
		<Dropdown className={'LangDropdown def-dropdown transparent'} align={'end'}>
			<Dropdown.Toggle size={'sm'} disabled={load}>
				{
					load ?
						<Spinner size={'sm'} /> :
						<>
							<img
								src={I18N_LANGS.find(elem => elem.value === i18n.language)?.image}
								alt={'Language'}
							/>
							<p>{t('general.lang_title').toUpperCase()}</p>
						</>
				}
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{
					I18N_LANGS
						.filter(elem => elem.value !== i18n.language)
						.map(elem => (
						<Dropdown.Item key={elem.value} onClick={() => setLang(elem.value)}>
							<img src={elem.image} alt={elem.title}/>
							<p>{elem?.title?.toUpperCase()}</p>
						</Dropdown.Item>
					))
				}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default LangDropdown;
