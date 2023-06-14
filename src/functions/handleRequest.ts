import {TRequestMethods} from "../types/general.ts";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../constants/api.ts";

export const handleRequest = (method:TRequestMethods, url:string, data:any, token?:string): Promise<AxiosResponse> => {
	const options = {
		method: method,
		url: API_URL + url,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token || null}`,
		},
		data: data
	};

	return axios.request(options)
}
