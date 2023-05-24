import * as React from "react";
import { AddToFavProps } from "./addToFav_type";
import { FavBtn, StarFilled, StarOutlined } from "./addToFavorite.style";
import { loadState, saveState } from "@utils/localStorage";
import { useState } from "react";

export const AddToFavoriteSection: React.FC<AddToFavProps> = ({ uuid }) => {
	const [favList, setFavList] = useState(loadState("favCoins"));

	const favoriteAction = () => {
		if (favList?.includes(uuid)) {
			const newArray = favList?.filter((item: string) => item !== uuid);

			saveState(newArray, "favCoins");
			setFavList(newArray);
		} else {
			saveState([...favList, uuid], "favCoins");
			setFavList([...favList, uuid]);
		}
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
