import React from "react";
import { CoinInterface } from "@customTypes/index";
import Highcharts from "highcharts/highstock";
import Chart from "highcharts-react-official";
import { useRouter } from "@utils/router";
import { littleChartConfig } from "@lib/littleChartConfig";
import { AddToFavoriteSection } from "@components/addToFav";
import { CoinPriceSection } from "@components/coinPrice";
import { CoinDesc, CoinName, CoinContent } from "./coinItem.style";
import { Col, Row } from "antd";

const CoinItem: React.FC<CoinInterface> = ({ currencySign, ...coin }) => {
	const { goTo } = useRouter();
	const { name, iconUrl, price, uuid, sparkline } = coin;

	return (
		<CoinContent
			onClick={() => {
				goTo(`:${uuid}`);
			}}
		>
			<Row style={{ width: "100%" }}>
				<Col
					span={7}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
					}}
				>
					<CoinDesc>
						<img src={iconUrl} style={{ width: 40 }} />
						<CoinName>{name}</CoinName>
					</CoinDesc>
				</Col>
				<Col
					span={8}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CoinPriceSection price={price} currencySign={currencySign} />
				</Col>
				<Col
					span={8}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{sparkline && (
						<Chart
							style={{ flex: 1 }}
							highcharts={Highcharts}
							options={littleChartConfig(coin)}
						/>
					)}
				</Col>
				<Col
					span={1}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<AddToFavoriteSection uuid={uuid} />
				</Col>
			</Row>
		</CoinContent>
	);
};

export default CoinItem;
