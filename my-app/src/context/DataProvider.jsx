import { createContext, useState } from "react";

export const DataContext = createContext (null);

const DataProvider = ({children}) => {
  const [account, setAccount] = useState('');
  const isAuthenticated = Boolean(account); // true if account is not an empty string

  return (
    <DataContext.Provider value={{
      account,
      setAccount,
      isAuthenticated
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;