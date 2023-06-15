export interface IEscrowCreate {
	role: "seller" | "bayer",
	feePayment: string,
	expirationDays: number,
	value: number,
	seller: string,
	bayer: string,
}
