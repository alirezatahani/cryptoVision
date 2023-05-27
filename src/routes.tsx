import * as React from "react";
import { Home } from "@pages/Home";
import { Coin } from "@pages/Coin";
import { Setting } from "@pages/Setting";

export const routes = [
	{ to: "/", component: <Home /> },
	{ to: "/setting", component: <Setting /> },
	{ to: "/:coinUuid", component: <Coin /> },
];
