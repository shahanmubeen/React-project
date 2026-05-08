import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children} // ek name ha is ka pas jo value ai wo direct aga pass aga kara ga and global variable jo app ka har componont ko access kar skta ha//
    </UserContext.Provider>
  );
  
};

export default UserContextProvider;