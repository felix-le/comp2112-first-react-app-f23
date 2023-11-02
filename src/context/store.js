import React, { createContext, useReducer } from "react";
import AppReducer from "./reducer";

const initState = {
  count: 0,
};

export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  const updateCount = () => {
    dispatch({ type: "ADD_COUNT" });
  };
  const resetCount = () => {
    dispatch({ type: "RESET_COUNT" });
  };

  const value = {
    state,
    updateCount,
    resetCount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
