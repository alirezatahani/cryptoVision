export type TabsProps = {
	key: number;
	name: string;
	queries?: {};
};

export const tabs: TabsProps[] = [
	{
		key: 1,
		name: "All",
		queries: {},
	},
	{
		key: 2,
		name: "Favorite Coins",
		queries: {},
	},
	{
		key: 3,
		name: "Gainers",
		queries: { orderBy: "change", orderDirection: "desc", scopeLimit: 200 },
	},
	,
	{
		key: 4,
		name: "Losers",
		queries: { orderBy: "change", orderDirection: "asc", scopeLimit: 200 },
	},
	{
		key: 5,
		name: "New",
		queries: { orderBy: "listedAt", orderDirection: "desc" },
	},
];
