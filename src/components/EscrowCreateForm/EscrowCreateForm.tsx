import React, {FormEvent} from 'react';
import "./EscrowCreateForm.css";
import CreateFormSelect from "./components/CreateFormSelect/CreateFormSelect.tsx";
import {RoleData} from "./data/RoleData.ts";
import {FeeData} from "./data/FeeData.ts";
import {useAppDispatch, useAppSelector} from "../../store/store.ts";
import {setFormData} from "../../store/slices/formCreateSlice.ts";
import {Form} from "react-bootstrap";

const EscrowCreateForm: React.FC = () => {

	const dispatch = useAppDispatch();
	const formData = useAppSelector(state => state.formCreate.formData);

	const setRole = (role: 'seller'|'bayer') => {
		dispatch(setFormData({...formData, role: role}))
	}

	const handleSend = (e:FormEvent) => {
		e.preventDefault();
		console.log(formData)
	}

	return (
		<Form onSubmit={handleSend} className={"EscrowCreateForm"}>
			<div className="block w50">
				<label>Select Role</label>
				<CreateFormSelect data={RoleData} handleChange={setRole} activeValue={formData.role} />
			</div>

			<div className="block w50">
				<label>Select Fee payment (Disabled now)</label>
				<CreateFormSelect data={FeeData} />
			</div>

			<div className="block horizontal w100">
				<div className="block w20">
					<label>Auto Release Wait Hours</label>
					<input
						required
						type={"number"}
						min={1}
						placeholder={"Minimum Waiting - 1 Hour"}
						className={"outline-gray-input ml"}
						value={formData.expirationDays || ""}
						onChange={e => dispatch(setFormData({...formData, expirationDays: +e.target.value}))}
					/>
				</div>

				<div className="block w30">
					<label>Value (ETH)</label>
					<input
						required
						className={"outline-gray-input ml"}
						value={formData.value || ""}
						onChange={e => dispatch(setFormData({...formData, value: e.target.value}))}
					/>
				</div>

				<div className="block fee horizontal w50">
					<p>
						Fee payment:
						<span>0.000 ETH (Free now)</span>
					</p>
				</div>
			</div>

			<div className="block w50">
				<label>Seller Address</label>
				<input
					required
					className={"outline-gray-input"}
					value={formData.seller}
					onChange={e => dispatch(setFormData({...formData, seller: e.target.value}))}
				/>
			</div>

			<div className="block w50">
				<label>Bayer Address</label>
				<input
					required
					className={"outline-gray-input"}
					value={formData.bayer}
					onChange={e => dispatch(setFormData({...formData, bayer: e.target.value}))}
				/>
			</div>

			<div className="btn-container">
				<button className={"btn-border-white"}>
					Get back
				</button>
				<button type={"submit"} className={"btn-gradient"}>
					Review Escrow
				</button>
			</div>
		</Form>
	);
};

export default EscrowCreateForm;
