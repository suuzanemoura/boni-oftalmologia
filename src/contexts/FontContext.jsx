"use client";

import { createContext, useContext, useState } from "react";

export const FontContext = createContext();

export function FontContextProvider({ children }) {
  const [textSize, setTextSize] = useState("text-base");

  const sizesVariation = [
    {
      name: "Fonte Padrão",
      description: "",
      iconSize: "h-6 w-6",
      fontSize: "text-base leading-6",
    },
    {
      name: "Fonte Grande",
      description: "Aumente o tamanho da fonte.",
      iconSize: "h-8 w-8",
      fontSize: "text-lg leading-7",
    },
    {
      name: "Fonte Extra Grande",
      description: "Deixe o tamanho da fonte ainda maior.",
      iconSize: "h-9 w-9",
      fontSize: "text-xl leading-8",
    },
  ];

  return (
    <FontContext.Provider value={{ textSize, setTextSize, sizesVariation }}>
      {children}
    </FontContext.Provider>
  );
}

export const useFontContext = () => useContext(FontContext);
