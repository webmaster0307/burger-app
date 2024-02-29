'use client';

import { useDebounce } from '@/hooks/useDebounce';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface ISearchContext {
  value: string;
  onChange: (value: string) => void;
}

export const SearchContext = createContext<ISearchContext>({
  value: '',
  onChange: () => {},
});

export const useSearch = (): ISearchContext => useContext(SearchContext);

const SearchProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter()
  const searchParam = searchParams.get('q') || '';

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if(value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
 
      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    setSearchValue(searchParam);
  }, [searchParam]);

  const onChange = (value: string) => {
    router.push('/' + '?' + createQueryString('q', value))
  }

  return (
    <SearchContext.Provider value={{value: searchValue, onChange}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;