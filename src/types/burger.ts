export interface IBurger {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  calorie: number;
  slug: string;
}

export interface IBurgerListResponse {
  products: IBurger[];
}
