import React, { createContext, useContext } from "react";
import { createBfyStore } from "./bfyStore";
import { useLocalObservable } from "mobx-react";

const BfyContext = createContext(null);

export const BfyProvider = ({ children }) => {
  const bfyStore = useLocalObservable(createBfyStore);
  return <BfyContext.Provider value={bfyStore}>{children}</BfyContext.Provider>;
};
export const useBfyStore = () => useContext(BfyContext);
