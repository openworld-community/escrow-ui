import React from 'react';
import {IUser} from "../../../../types/user.ts";
import "./UserProfile.css";
import {useAppDispatch} from "../../../../store/store.ts";
import {clearUser} from "../../../../store/slices/userSlice.ts";

interface IUserProfile {
	data: IUser
}

const UserProfile: React.FC<IUserProfile> = ({ data }) => {

	const dispatch = useAppDispatch();

	return (
		<div className={"UserProfile"}>
			<div className="user-avatar">
				<img src={data.avatar} alt={data.username}/>
				<p>Profile image</p>
			</div>

			<label>Wallet Address</label>
			<div className="address">
				<p className={"small"}>{data.address}</p>
				<img src="/images/icons/copy.svg" alt="copy"/>
			</div>

			<label>Username</label>
			<div className="address">
				<p className={"small"}>{data.username}</p>
				<img src="/images/icons/copy.svg" alt="copy"/>
			</div>

			<button className={"w-100 btn-border-gradient"} onClick={() => dispatch(clearUser())}>
				Log Out
			</button>
		</div>
	);
};

export default UserProfile;
