import { API_BASE_URL } from '@/constants/url';
import { IBurgerListResponse } from '@/types/burger';
import { cache } from 'react'
 
export const getBurgers = cache(async () => {
  const res = await fetch(`${API_BASE_URL}/data/products.json`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: IBurgerListResponse = await res.json();
 
  return data;
})
