/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, useState } from "react";
import { FCC } from "../@types/types";

export const FavContext = createContext({
  status: "",
  //@ts-ignore
  toggle: (id: string) => {},
});

export const FavProvider: FCC = ({ children }) => {
  const [status, setStatus] = useState("");

  const toggle = (id) => {
    setStatus(id);
  };

  return (
    <FavContext.Provider value={{ status, toggle }}>
      {children}
    </FavContext.Provider>
  );
};
