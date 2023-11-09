import axios, { type AxiosResponse } from 'axios';

import api from './api';
import { ExplorerInfoResponse, ExplorerSuccessResponse } from './responses/explorer-info.response';
import {
	LatestTransactionsResponse,
	LatestTransactionsSuccessResponse,
} from './responses/txn/latests-txns.response';
import {
	TransactionDetailResponse,
	TransactionDetailsSuccessResponse,
} from './responses/txn/txn-details.response';
import {
	LatestBlocksResponse,
	LatestBlocksSuccessResponse,
} from './responses/blocks/latest-blocks.response';
import {
	BlockTransactionsResponse,
	BlockTransactionsSuccessResponse,
} from './responses/blocks/block-txns-response';
import {
	BlockDetailsResponse,
	BlockDetailsSuccessResponse,
} from './responses/blocks/block-details.response';
import {
	AddressTxnHistoryResponse,
	AddressTxnHistorySuccessResponse,
} from './responses/addresss/txn-history.response';
import { BalanceResponse, BalanceSuccessResponse } from './responses/addresss/balance.response';

const QueryApi = {
	blocks: {
		latests: async (page: number, count: number): Promise<LatestBlocksSuccessResponse> => {
			const url = api.blocks.latests(page, count);
			const res = await axios<LatestBlocksSuccessResponse>({
				method: 'get',
				url,
			});

			return res.data;
		},
		details: async (blockNumber: number): Promise<BlockDetailsSuccessResponse> => {
			const url = api.blocks.details(blockNumber);
			const res = await axios<BlockDetailsSuccessResponse>({
				method: 'get',
				url,
			});

			return res.data;
		},
		allTxn: async (
			blockNumber: number,
			page: number,
			count: number
		): Promise<BlockTransactionsSuccessResponse> => {
			const url = api.blocks.allTxn(blockNumber, page, count);

			const res = await axios<BlockTransactionsSuccessResponse>({
				method: 'get',
				url,
			});

			return res.data;
		},
	},
	explorer: {
		info: async (): Promise<ExplorerSuccessResponse> => {
			const url = api.explorer.info;

			const res = await axios<ExplorerSuccessResponse>({
				method: 'get',
				url,
			});

			return res.data;
		},
	},
	transactions: {
		details: async (txnhash: string): Promise<TransactionDetailsSuccessResponse> => {
			const url = api.transactions.details(txnhash);
			const res = await axios<TransactionDetailsSuccessResponse>({
				method: 'get',
				url,
			});

			return res.data;
		},
		latest: async (page: number, count: number): Promise<LatestTransactionsSuccessResponse> => {
			const url = api.transactions.latest(page, count);

			const res = await axios({
				method: 'get',
				url,
			});

			return res.data;
		},
	},
	user: {
		txnHistory: async (
			address: string,
			count: number,
			page: number
		): Promise<AddressTxnHistorySuccessResponse> => {
			const url = api.user.txnHistory(address, count, page);
			const res = await axios<AddressTxnHistorySuccessResponse>({
				method: 'get',
				url,
			});

			return res.data;
		},

		balance: async (address: string): Promise<BalanceSuccessResponse> => {
			const url = api.user.balance(address);
			const res = await axios<BalanceSuccessResponse>({
				method: 'get',
				url,
			});

			return res.data;
		},
	},
};

export default QueryApi;
