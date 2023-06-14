export const API_URL = 'http://23.111.124.118:3001';
export const API_USER_NONCE = (address: string | null):string => `/user/nonce/${address}`;
export const API_USER_CREATE = '/user';
export const API_USER_AUTH = '/user/auth';
export const API_USER_ME = '/user/me';
