export interface CoinInterface {
	iconUrl: string;
	name: string;
	price: string;
	change: number;
	uuid?: string;
	currencySign?: string;
	sparkline?: [];
	[x: string]: any;
}
export type CurrencyOptions = {
	uuid: string;
	symbol: string;
	name: string;
	sign: string;
};

export type GetCoinsDataProps = {
	queries?: {};
	currencySign: string;
};
