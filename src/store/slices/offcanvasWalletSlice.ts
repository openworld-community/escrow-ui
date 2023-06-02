import {createSlice} from "@reduxjs/toolkit";

interface IOffcanvas {
	show: boolean,
}
const initialState: IOffcanvas = {
	show: false,
};

export const offcanvasWalletSlice = createSlice({
	name: "offcanvasWallet",
	initialState,
	reducers: {
		switchShow: (state) => {
			state.show = !state.show;
		}
	}
})



export const {switchShow} = offcanvasWalletSlice.actions;
export default offcanvasWalletSlice.reducer;
