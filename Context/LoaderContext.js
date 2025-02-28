"use client";

import React, { useContext, createContext, useState } from "react";

const LoaderContext = createContext(undefined);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }

  return context;
};
