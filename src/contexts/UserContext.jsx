import { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  email: "",
  password: "",
  setEmail: () => {},
  setPassword: () => {}
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setUserData = (email, password) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <UserContext.Provider value={{ email, password, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
