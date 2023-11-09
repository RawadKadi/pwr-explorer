type Transaction = {
	txnHash: string;
	timeStamp: number;
	valueInUsd: string;
	nonceOrValidationHash: string;
	block: number;
	txnType: string;
	from: string;
	to: string;
	txnFeeInUsd: number;
	txnFee: string;
	value: string;
};

export type AddressTxnHistorySuccessResponse = {
	//
	transactions: Transaction[];

	//
	metadata: {
		previousPage: number;
		currentPage: number;
		nextPage: number;
		totalPages: number;
		totalItems: number;
		itemsPerPage: number;
		startIndex: number;
		endIndex: number;
	};

	//
	hashOfFirstTxnSent: string;
	hashOfLastTxnSent: string;

	timeOfFirstTxnSent: number;
	timeOfLastTxnSent: number;
};

type AddressTxnHistoryFailureResponse = {
	message: string;
};

export type AddressTxnHistoryResponse =
	| AddressTxnHistorySuccessResponse
	| AddressTxnHistoryFailureResponse;
