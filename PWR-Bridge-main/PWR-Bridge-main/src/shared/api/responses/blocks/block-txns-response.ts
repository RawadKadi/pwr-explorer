type Txn = {
	txnHash: string;
	timeStamp: number;
	blockNumber: number;
	txnType: string;
	from: string;
	to: string;
	value: string;
};

export type BlockTransactionsSuccessResponse = {
	transactions: Txn[];
	metadata: {
		totalItems: number;
		startIndex: number;
		previousPage: number;
		itemsPerPage: number;
		endIndex: number;
		nextPage: number;
		totalPages: number;
		currentPage: number;
	};
};

type BlockTransactionsFailureResponse = {
	message: string;
};

export type BlockTransactionsResponse =
	| BlockTransactionsSuccessResponse
	| BlockTransactionsFailureResponse;
