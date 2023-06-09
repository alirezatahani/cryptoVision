import * as React from "react";
import { AddToFavProps } from "./addToFav_type";
import { FavBtn, StarFilled, StarOutlined } from "./addToFavorite.style";
import { loadState, saveState } from "@utils/localStorage";
import { useState } from "react";

export const AddToFavoriteSection: React.FC<AddToFavProps> = ({ uuid }) => {
	const [favList, setFavList] = useState(loadState("favCoins") ?? []);

	const favoriteAction = () => {
		setFavList((prevFavList: any) => {
			if (prevFavList?.includes(uuid)) {
				const newArray = prevFavList?.filter((item: string) => {
					if (item !== uuid) {
						return item;
					}
				});

				saveState(newArray, "favCoins");
				return newArray;
			} else {
				saveState([...prevFavList, uuid], "favCoins");
				return [...prevFavList, uuid];
			}
		});
	};
	return (
		<FavBtn
			onClick={(e) => {
				e.stopPropagation();
				favoriteAction();
			}}
		>
			{favList?.some((item: {}) => uuid === item) ? (
				<StarFilled />
			) : (
				<StarOutlined />
			)}
		</FavBtn>
	);
};
