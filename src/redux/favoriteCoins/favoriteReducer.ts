import { ADD_TO_FAVORITE } from "@redux/favoriteCoins/favoriteTypes";
import { saveState } from "@utils/localStorage";

const initialState: { favoriteList: string[] } = {
	favoriteList: [],
};

export const favoriteReducer = (
	state = initialState,
	action: { type: string; payload: string },
) => {
	switch (action.type) {
		case ADD_TO_FAVORITE:
			const favoriteCoinIndex = state.favoriteList.findIndex(
				(item) => item == action.payload,
			);

			if (favoriteCoinIndex < 0) {
				saveState(
					{
						...state,
						favoriteList: [...state.favoriteList, action.payload],
					},
					"favCoins",
				);
				return {
					...state,
					favoriteList: [...state.favoriteList, action.payload],
				};
			} else {
				const newArray = state.favoriteList.filter(
					(item) => item !== action.payload,
				);
				saveState(
					{
						...state,
						favoriteList: newArray,
					},
					"favCoins",
				);
				return {
					...state,
					favoriteList: newArray,
				};
			}

		default:
			return state;
	}
};
