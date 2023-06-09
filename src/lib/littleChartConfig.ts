import { theme } from "@global/Global";
import moment from "moment";
import { CoinInterface } from "@customTypes/index";

export const littleChartConfig = (coin: CoinInterface) => {
	const series = coin.sparkline.map((item: string, index: number) => {
		return [
			moment()
				.subtract(180 - (index + 1) * 5, "minutes")
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
			floating: true,
			style: {
				color: Number(coin.change >= 0)
					? [theme.palette.success.main]
					: [theme.palette.danger.main],
				fillColor: "#fff",
				background: "#fff",
				borderRadius: 8,
				width: 30,
				height: 20,
				fontFamily: "roboto",
			},

			text: priceChange(),
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
								? // ? "#83e6b1"
								  "#83e6b13b"
								: "#d9687240",
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
				type: "area",
				data: series,
			},
		],
	};
	return options;
};
