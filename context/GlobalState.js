"use client";

import React, { useState } from "react";
import { AppContext } from "./AppContext";

const GlobalState = ({ children }) => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  return (
    <AppContext.Provider value={{ isLoginModal, setIsLoginModal }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
