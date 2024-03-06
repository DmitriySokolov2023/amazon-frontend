import { IReviews } from '@/types/review.interface';
import { ICategory } from '@/types/category.interface';

export interface IProduct{
  id:number
  name:string
  slug:string
  description:string
  price:string
  reviews:IReviews[]
  image:string[]
  createAt:string
  category:ICategory
}

export interface IProductDetails{
  product:IProduct
}