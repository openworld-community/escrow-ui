import axios from "axios";
import {API_URL} from "../constants/api.ts";

export const handleFetchGet = (link:string, params?: object) => {
	return axios.get(API_URL + link, {params: params});
}
