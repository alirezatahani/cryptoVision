import * as React from "react";
import { Home } from "@pages/Home";
import { Coin } from "@pages/Coin";

export const routes = [
	{ to: "/", component: <Home /> },
	{ to: "/:coinUuid", component: <Coin /> },
];
