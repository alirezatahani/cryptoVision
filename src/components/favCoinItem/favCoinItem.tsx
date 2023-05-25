import React, { useEffect, useState } from "react";
import { CoinInterface } from "@customTypes/index";
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import { useRouter } from "@utils/router";
import { areaChartConfig } from "@lib/areaChartConfig";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice";
import {
	CoinDesc,
	CoinUpdater,
	CoinContent,
	CoinSymbol,
} from "./coinItem.style";
import { Col, Row, Spin } from "antd";
import useFetch from "@hooks/useFetch";

export const FavCoinItem: React.FC<CoinInterface> = ({
	currencySign,
	...coin
}) => {
	const { goTo } = useRouter();
	const [shouldUpdate, setShouldUpdate] = useState<boolean>(false);
	const [{ loading, data }, fetchCoinData] = useFetch();

	useEffect(() => {
		setInterval(() => {
			fetchCoinData({
				url: `/coins?uuids=${coin.uuid}&timePeriod=1h`,
				method: "get",
			});
		}, 9000);
	}, []);

	useEffect(() => {
		if (data?.data?.coins?.[0] && !loading) {
			setShouldUpdate(true);
		} else {
			setShouldUpdate(false);
		}
	}, [data, loading]);

	const { name, iconUrl, price, change, sparkline, symbol } =
		data?.data?.coins?.[0] ?? coin;

	return (
		<CoinContent>
			{shouldUpdate && <CoinUpdater change={Number(change)} />}
			<Row style={{ width: "100%" }}>
				<Col span={8}>
					<CoinDesc>
						<img src={iconUrl} style={{ width: 40 }} />
						<CoinSymbol>{symbol}</CoinSymbol>{" "}
					</CoinDesc>
				</Col>
				<Col
					span={16}
					style={{
						height: 100,
						display: "flex",
						alignItems: "flex-start",
						position: "relative",
						zIndex: 2,
						gap: 12,
					}}
				>
					<CoinPriceSection price={price} currencySign={currencySign} />
				</Col>
				<div
					style={{
						position: "absolute",
						right: 0,
						bottom: 0,
						background: "linear-gradient(90deg, #0a1222 28%, transparent)",
						zIndex: 1,
						width: 380,
						height: 100,
					}}
				/>
				<div
					style={{
						position: "absolute",
						right: 0,
						bottom: 0,
					}}
				>
					{sparkline && (
						<Chart
							style={{ flex: 1 }}
							highcharts={Highcharts}
							options={areaChartConfig(coin)}
						/>
					)}
				</div>
			</Row>
		</CoinContent>
	);
};
