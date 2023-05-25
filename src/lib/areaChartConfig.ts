import { theme } from "@global/Global";
import moment from "moment";
import { CoinInterface } from "@customTypes/index";
import Highcharts from "highcharts";

export const areaChartConfig = (coin: CoinInterface) => {
	const series = coin.sparkline.map((item: string, index: number) => {
		return [
			moment()
				.subtract(180 - (index + 1) * 5, "minutes")
				.valueOf(),
			Number(item),
		];
	});

	const options = {
		chart: {
			height: 80,
			width: 300,
			backgroundColor: "transparent",
			spacing: [0, 1, 0, 50],
		},
		colors: Number(coin.change >= 0)
			? [theme.palette.success.main]
			: [theme.palette.danger.main],
		credits: {
			enabled: false,
		},
		legend: {
			enabled: false,
		},
		title: {
			text: "",
		},
		caption: {
			align: "top",
			floating: false,
			style: {
				color: Number(coin.change >= 0)
					? [theme.palette.success.main]
					: [theme.palette.danger.main],
			},
			text: "",
			verticalAlign: "center",
			x: -50,
			y: 25,
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1,
					},
					stops: [
						[
							0,
							Number(coin.change >= 0)
								? [theme.palette.success.main]
								: [theme.palette.danger.main],
						],
						[1, "transparent"],
					],
				},
			},
			series: {
				allowPointSelect: false,
			},
		},

		boost: {
			enabled: false,
		},
		yAxis: [
			{
				type: "logarithmic",

				title: {
					text: "",
				},
				labels: { enabled: false },
				visible: false,
			},
		],
		xAxis: [
			{
				title: {
					text: "",
				},
				labels: { enabled: false },
				visible: false,
			},
		],
		tooltip: {
			enabled: false,
		},
		series: [
			{
				type: "area",
				data: series,
			},
		],
	};
	return options;
};
