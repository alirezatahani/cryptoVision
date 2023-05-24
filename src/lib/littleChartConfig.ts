import { theme } from "@global/Global";
import moment from "moment";
import { CoinInterface } from "@customTypes/index";

export const littleChartConfig = (coin: CoinInterface) => {
	const series = coin.sparkline.map((item: string, index: number) => {
		return [
			moment()
				.subtract(12 - index, "hours")
				.valueOf(),
			Number(item),
		];
	});

	const priceChange = () => {
		if (Number(coin.change) === null) return 0;
		return Number(coin.change) > 0 ? `+${coin.change} %` : `${coin.change} %`;
	};

	const upOrDown = Number(coin.change >= 0)
		? theme.palette.success[400]
		: theme.palette.danger[400];

	const options = {
		chart: {
			height: 40,
			width: 130,
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
			text: priceChange(),
			verticalAlign: "center",
			x: -50,
			y: 25,
		},
		plotOptions: {
			line: {
				// fillColor: {
				// 	linearGradient: {
				// 		x1: 0,
				// 		y1: 0,
				// 		x2: 0,
				// 		y2: 1,
				// 	},
				// 	stops: [
				// 		[
				// 			0,
				// 			Number(coin.change >= 0)
				// 				? [theme.palette.success.main]
				// 				: [theme.palette.danger.main],
				// 		],
				// 		[
				// 			1,
				// 			Number(coin.change >= 0)
				// 				? [theme.palette.success.main]
				// 				: [theme.palette.danger.main],
				// 		],
				// 	],
				// },
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
				title: {
					text: "",
				},
				labels: { enabled: false },
				visible: false,
			},
		],
		xAxis: [
			{
				type: "datetime",
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
				data: series,
			},
		],
	};
	return options;
};
