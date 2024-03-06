import { IUser } from '@/types/user.interface';

export interface IReviews{
  id:number
  user:IUser
  createAt:string
  text:string
  rating:string
}