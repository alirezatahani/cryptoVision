import * as React from "react";
import { Home } from "@modules/home";
import { CoinPage } from "@modules/coinPage";

export const routes = [
	{ to: "/", component: <Home /> },
	{ to: "/:coinUuid", component: <CoinPage /> },
];
