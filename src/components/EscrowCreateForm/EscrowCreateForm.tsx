import React from 'react';
import "./EscrowCreateForm.css";
import CreateFormSelect from "./components/CreateFormSelect/CreateFormSelect.tsx";
import {RoleData} from "./data/RoleData.ts";
import {FeeData} from "./data/FeeData.ts";
import { Form } from "react-bootstrap";

const EscrowCreateForm: React.FC = () => {

	return (
		<div className={"EscrowCreateForm"}>
			<div className="block w50">
				<label>Select Role</label>
				<CreateFormSelect data={RoleData} />
			</div>

			<div className="block w50">
				<label>Select Fee payment</label>
				<CreateFormSelect data={FeeData} />
			</div>

			<div className="block horizontal w100">
				<div className="block w20">
					<label>Auto Release Wait Days</label>
					<input className={"outline-gray-input ml"} />
				</div>

				<div className="block w30">
					<label>Value</label>
					<input className={"outline-gray-input ml"} />
				</div>

				<div className="block m-0 w20">
					<label>Unit</label>
					<Form.Select className={"outline-gray-input"}>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</Form.Select>
				</div>

				<div className="block fee horizontal w30">
					<p>
						Fee payment:
						<span>0.0785 ETH</span>
					</p>
				</div>
			</div>

			<div className="block w50">
				<label>Seller Address</label>
				<input className={"outline-gray-input"} />
			</div>

			<div className="block w50">
				<label>Bayer Address</label>
				<input className={"outline-gray-input"} />
			</div>

			<div className="btn-container">
				<button className={"btn-border-white"}>
					Get back
				</button>
				<button className={"btn-gradient"}>
					Review Escrow
				</button>
			</div>
		</div>
	);
};

export default EscrowCreateForm;
