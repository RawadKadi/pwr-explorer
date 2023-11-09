import { Block } from '@/shared/models/block.model';

type Txn = {
	txnHash: string;
	timeStamp: number;
	valueInUsd: number;
	nonceOrValidationHash: string;
	txnType: string;
	from: string;
	to: string;
	txnFeeInUsd: number;
	txnFee: string;
	value: string;
	positionInBlock: number;
	block: number;
};

export type LatestTransactionsSuccessResponse = {
	averageTransactionFeePast24Hours: number;
	averageTransactionFeePercentageChangeComparedToPreviousDay: number;

	//
	totalTransactionFeesPast24Hours: string;
	totalTransactionFeesPercentageChangeComparedToPreviousDay: string;

	//
	transactionCountPast24Hours: number;
	transactionCountPercentageChangeComparedToPreviousDay: number;

	//
	transactions: Txn[];

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
};

type LatestTransactionsFailureResponse = {
	message: string;
};

export type LatestTransactionsResponse =
	| LatestTransactionsSuccessResponse
	| LatestTransactionsFailureResponse;
