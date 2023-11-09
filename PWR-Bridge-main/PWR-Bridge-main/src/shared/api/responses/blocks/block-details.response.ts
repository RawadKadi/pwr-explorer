export type BlockDetailsSuccessResponse = {
	timeStamp: number;
	blockConfirmations: number;
	blockHeight: number;
	txnsCount: number;
	blockReward: string;
	blockSize: number;
	blockSubmitter: string;
};

type BlockDetailsFailureResponse = {
	message: string;
};

export type BlockDetailsResponse = BlockDetailsSuccessResponse | BlockDetailsFailureResponse;
