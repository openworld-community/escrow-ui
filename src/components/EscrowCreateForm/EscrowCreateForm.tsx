import React from 'react';
import "./EscrowCreateForm.css";
import CreateFormSelect from "./components/CreateFormSelect/CreateFormSelect.tsx";
import {RoleData} from "./data/RoleData.ts";
import {FeeData} from "./data/FeeData.ts";

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
					<label>Seller Address</label>
					<input className={"outline-gray-input ml"} />
				</div>

				<div className="block w30">
					<label>Seller Address</label>
					<input className={"outline-gray-input ml"} />
				</div>

				<div className="block m-0 w20">
					<label>Seller Address</label>
					<input className={"outline-gray-input"} />
				</div>

				<div className="block fee horizontal w30">
					<p>
						Fee payment:
						<span>0.000785294320 ETH</span>
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
