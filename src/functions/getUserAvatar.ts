export const getUserAvatar = ():string => {
	const num:number = Math.floor(Math.random() * (20));
	return `/images/def-avatars/${num}.png`
}
