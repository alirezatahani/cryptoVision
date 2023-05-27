import React, { ReactElement } from "react";
import { useAppSelector } from "@hooks/hooks";
import { useMemo } from "react";
import { RouterType } from "./router_types";

export const Router: React.FC<RouterType> = ({ children }: any) => {
	const stack = useAppSelector((state) => state.stack.stack);
	let lastStackItem: string = stack?.[stack.length - 1] ?? "/";

	const isEqual = (array1: string[], array2: string[]) => {
		const { _array1, _array2 } = replaceDynamicValues(array1, array2);

		return _array1.join("") === _array2.join("");
	};

	const replaceDynamicValues = (array1: string[], array2: string[]) => {
		const rv: string[] = [];

		array1.forEach((_, index) => {
			if (_ !== array2[index] && array2[index].startsWith(":")) {
				rv.push(array2[index]);
			} else {
				rv.push(_);
			}
		});

		return { _array1: rv, _array2: array2 };
	};

	const routesObject = useMemo(() => {
		let rv: { [x: string]: ReactElement } = {};
		React.Children.map(children, (child: ReactElement) => {
			rv[child.props.to] = child.props.component;
		});
		return rv;
	}, []);

	const actualRoute = useMemo(() => {
		const splitedRoute = lastStackItem.split("/");

		for (const key in routesObject) {
			const splitedRoutesObject = key.split("/");

			if (splitedRoutesObject.length === splitedRoute.length) {
				if (isEqual(splitedRoute, splitedRoutesObject)) {
					return routesObject[splitedRoutesObject.join("/")];
				}
			}
		}
	}, [lastStackItem]);

	return actualRoute;
};
