import React, {useState} from 'react';
import {Dropdown} from "react-bootstrap";
import {networks} from "../../constants/networks.ts";
import "./NetworkDropdown.css";

const NetworkDropdown: React.FC = () => {

	const [selected, setSelected] = useState(networks[0]);

	return (
		<Dropdown className={'NetworkDropdown def-dropdown transparent'} align={'end'}>
			<Dropdown.Toggle size={'sm'}>
				<img
					src={selected.image}
					alt={selected.title}
				/>
				<p>{selected.title}</p>
			</Dropdown.Toggle>

			<Dropdown.Menu>
				{
					networks
						.filter(elem => elem.title !== selected.title)
						.map(elem => (
							<Dropdown.Item key={elem.title} onClick={() => setSelected(elem)}>
								<img src={elem.image} alt={elem.title} />
								<p>{elem.title}</p>
							</Dropdown.Item>
						))
				}
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default NetworkDropdown;
