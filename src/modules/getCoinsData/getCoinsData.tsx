import React, { useEffect } from "react";
import { Spin, Space } from "antd";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import useFetch from "@hooks/useFetch";
import { convertToQuery } from "@utils/queries";
import { CoinList } from "@components/coinList";
import { GetCoinsDataProps } from "./getCoinsData_type";
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
	{
		launchesPast(limit: 10) {
			id
			mission_name
		}
	}
`;

export const GetCoinsData: React.FC<GetCoinsDataProps> = ({
	queries,
	currencySign,
}) => {
	// const { data, loading, error } = useQuery(FILMS_QUERY);

	const [{ loading, data }, fetchCoinsData] = useFetch();
	const cookies = parseCookies();

	const makingUrl = () => {
		return convertToQuery(queries);
	};

	useEffect(() => {
		const url = makingUrl();
		!!cookies.coins &&
			!!cookies.coins.length &&
			fetchCoinsData({ url: `/coins?${url}`, method: "get" });
	}, [queries]);

	useEffect(() => {
		if (data && data.data && data.data.coins) {
			setCookie(null, "coins", JSON.stringify(data.data.coins), {
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});
		} else {
			setCookie(null, "coins", "[]", {
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});
		}
	}, [data]);

	return loading ? (
		<div
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Spin />
		</div>
	) : (
		<CoinList
			loading={loading}
			data={data && data.data && data.data.coins}
			currencySign={currencySign}
		/>
	);
};
