export interface ProductType {
  id: number;
  price: number;
  rating: number;
  name: string;
  description: string;
  type: Array<string>;
  actor: Array<string>;
  image: string;
  year: number;
  view: number;
}
