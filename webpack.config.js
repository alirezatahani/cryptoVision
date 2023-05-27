const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // installed via npm

module.exports = {
	mode: "development",
	entry: {
		bundle: "./src/index.tsx",
		background: "./src/background.ts",
		content: "./src/content.tsx",
		removeFavCoinsFromDOM: "./src/removeFavCoinsFromDOM.tsx",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(ts|tsx)?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /\.module\.css$/,
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				],
				include: /\.module\.css$/,
			},
		],
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin({})],
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	devServer: {
		open: true,
		hot: false,
		port: 8081,
		compress: true,
		historyApiFallback: true,
		devMiddleware: {
			index: true,
			writeToDisk: true,
		},
		static: {
			directory: path.join(__dirname, "dist"),
			publicPath: "/",
		},
	},
	devtool: "cheap-module-source-map",

	plugins: [
		new Dotenv(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve("./public/index.html"),
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve("./public/manifest.json"),
					to: path.resolve(__dirname, "dist"),
				},
				{
					from: path.resolve("./public/logo1.png"),
					to: path.resolve(__dirname, "dist"),
				},
			],
		}),
	],
};
