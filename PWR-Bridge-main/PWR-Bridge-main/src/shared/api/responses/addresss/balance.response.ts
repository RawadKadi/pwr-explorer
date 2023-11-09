export type BalanceSuccessResponse = {
	balance: string;
	balanceUsdValue: number;
};

type BalanceFailureResponse = {
	message: string;
};

export type BalanceResponse = BalanceSuccessResponse | BalanceFailureResponse;
