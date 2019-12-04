import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Nico",
    loggedIn: false
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  //...user 앞에 점3개는 모든 오브젝트를 뒤진다라는 의미
  return (
    <UserContext.Provider value={{ user, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;