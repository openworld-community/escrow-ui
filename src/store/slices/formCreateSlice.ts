import {createSlice} from "@reduxjs/toolkit";
import {IEscrowCreate} from "../../types/escrow.ts";

interface IInitial {
	formData: IEscrowCreate,
}

const initialState: IInitial = {
	formData: {
		role: "seller",
		feePayment: "",
		expirationDays: 0,
		value: 0,
		seller: "",
		bayer: "",
	},
};

export const formCreateSlice = createSlice({
	name: "formCreate",
	initialState,
	reducers: {
		setFormData: (state, action) => {
			state.formData = action.payload;
		},
		clearFormData: (state) => {
			state.formData = initialState.formData;
		},
	}
})



export const {setFormData, clearFormData} = formCreateSlice.actions;
export default formCreateSlice.reducer;
