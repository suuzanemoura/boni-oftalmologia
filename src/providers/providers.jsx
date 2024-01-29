"use client";

import { FontContextProvider } from "@/src/contexts/FontContext";

export function Providers({ children }) {
  return <FontContextProvider>{children}</FontContextProvider>;
}
