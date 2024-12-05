import * as React from "react";

export const IsNewContext = React.createContext(null);

export const IsNewContextProvider = ({ children }) => {
  const [isNew, setIsNew] = React.useState(true);
  return (
    <IsNewContext.Provider value={{ isNew, setIsNew }}>
      {children}
    </IsNewContext.Provider>
  );
};

export const useIsNewContext = () => {
  const context = React.useContext(IsNewContext);
  if (!context) {
    throw new Error(
      "You need to use this context inside of 'IsNewContextProvider'"
    );
  }
  return context;
};
