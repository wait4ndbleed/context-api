import { reducerctionType } from "@/types/reducerActionType";
import { userType } from "@/types/userType";

export const userInitialState: userType = {
  name: "",
  age: 0,
};

export const userReducer = (state: userType, action: reducerctionType) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
      break;
    case "CHANGE_AGE":
      return { ...state, age: action.payload.age };
      break;
  }

  return state;
};
