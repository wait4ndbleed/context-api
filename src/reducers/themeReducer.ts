import { reducerctionType } from "@/types/reducerActionType";
import { themeType } from "@/types/themeType";


export const themeInitialState: themeType = {
  status: "light"
};

export const themeReducer = (state: themeType, action: reducerctionType) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return { ...state, status: action.payload.status };
      break;
  }

  return state;
};
