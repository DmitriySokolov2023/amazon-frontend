import { instance } from '@/api/api.interceptor';

import { IReviews } from '@/types/review.interface';


type TypeData = {
  text:string,
  rating:string
}
export const ReviewService = {
  async getAll() {
    return instance<IReviews[]>({
      url: `/review`,
      method: 'GET',
    })
  },
  async getById(id:string | number) {
    return instance<IReviews>({
      url: `/review/${id}`,
      method: 'GET',
    })
  },

  async createReview(productId:string, data:TypeData) {
    return instance<IReviews>({
      url: `/review/create/${productId}`,
      method: 'POST',
      data
    })
  },
}

