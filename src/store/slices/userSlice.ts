import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../types/user.ts";

interface IUserInitial {
	data: IUser | null,
}

const initialState: IUserInitial = {
	data: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.data = action.payload;
		},
		clearUser: (state) => {
			state.data = initialState.data;
		},
	}
})



export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;
