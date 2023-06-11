import Web3 from "web3";

let web3: Web3 | undefined = undefined; // Will hold the web3 instance

type TGetAddress = {
	address: null | string,
	error: boolean,
}

export const handleGetAddress = async ():Promise<TGetAddress> => {

	const errorReturn = {
		address: null,
		error: true,
	};

	// Check if MetaMask is installed
	if (!(window as any).ethereum) return errorReturn;

	if (!web3) {
		try {
			// Request account access if needed
			await (window as any).ethereum.enable();

			// We don't know window.web3 version, so we use our own instance of Web3 with the injected provider given by MetaMask
			web3 = new Web3((window as any).ethereum);
		} catch (error) {
			return errorReturn;
		}
	}

	const coinbase = await web3.eth.getCoinbase();
	if (!coinbase) return errorReturn;

	return {
		error: false,
		address: coinbase.toLowerCase(),
	}
}
