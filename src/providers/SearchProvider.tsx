'use client';

import { useDebounce } from '@/hooks/useDebounce';
import React, { createContext, useContext, useEffect, useState } from 'react';

const SearchContext = createContext<string | null>(null);

export const useSearch = (): string | null => useContext(SearchContext);

const SearchProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    setSearchValue(searchParam);
  }, []);

  return (
    <SearchContext.Provider value={debouncedSearchValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;