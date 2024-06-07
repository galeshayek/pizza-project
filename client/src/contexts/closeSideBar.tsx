import { createContext, useState } from "react";
import { FCC } from "../@types/types";

export const closeSideBarContext = createContext({
  isClosed: false,
  //@ts-expect-error
  toggle: (data: boolean) => {},
});
const CloseSideBarProvider: FCC = ({ children }) => {
  const [isClosed, setclosed] = useState(false);
  const toggle = (data: boolean) => {
    setclosed(data);
  };

  return (
    <closeSideBarContext.Provider value={{ toggle, isClosed }}>
      {children}
    </closeSideBarContext.Provider>
  );
};

export default CloseSideBarProvider;
