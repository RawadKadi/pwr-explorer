type Block = {
	timeStamp: number;
	blockHeight: number;
	txnsCount: number;
	blockReward: string;
	blockSubmitter: string;
};

export type LatestBlocksSuccessResponse = {
	networkUtilizationPast24Hours: number;
	totalBlockRewardsPast24Hours: string;
	averageBlockSizePast24Hours: number;
	blocks: Block[];
	metadata: {
		currentPage: number;
		endIndex: number;
		itemsPerPage: number;
		nextPage: number;
		previousPage: number;
		startIndex: number;
		totalItems: number;
		totalPages: number;
	};
};

type LatestBlocksFailureResponse = {
	message: string;
};

export type LatestBlocksResponse = LatestBlocksSuccessResponse | LatestBlocksFailureResponse;
