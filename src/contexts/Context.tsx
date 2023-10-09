"use client";

import { themeInitialState, themeReducer } from "@/reducers/themeReducer";
import { userInitialState, userReducer } from "@/reducers/userReducer";
import { reducerctionType } from "@/types/reducerActionType";
import { themeType } from "@/types/themeType";
import { userType } from "@/types/userType";
import { ReactNode, createContext, useReducer } from "react";

type initilStateType = {
  user: userType;
  theme: themeType;
};

type ContextType = {
  state: initilStateType;
  dispatch: React.Dispatch<any>;
};

type ContexProvider = {
  children: ReactNode;
};

const initialState = {
  user: userInitialState,
  theme: themeInitialState
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initilStateType, action: reducerctionType) => ({
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action),
});

export const ContextProvier = ({ children }: ContexProvider) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
