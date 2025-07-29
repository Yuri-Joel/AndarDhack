// src/context/SearchContext.tsx
import React, { createContext, useState, useContext } from "react"

const SearchContext = createContext<any>(null)

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [term, setTerm] = useState("")

  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
