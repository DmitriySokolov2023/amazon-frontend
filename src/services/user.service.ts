import { instance } from '@/api/api.interceptor';
import { IUser } from '@/types/user.interface';

type TypeData = {
  email:string,
  name?:string,
  avatarPath?:string,
  password?:string,
  phone?:string,
}
export const usersService = {
  async getAll() {
    return instance<IUser[]>({
      url: `/users`,
      method: 'GET',
    })
  },
  async getById(id:string | number) {
    return instance<IUser>({
      url: `/users/${id}`,
      method: 'GET',
    })
  },

  async getProfile() {
    return instance<IUser>({
      url: `/users/profile`,
      method: 'GET',
    })
  },
  async updateProfile(data:TypeData) {
    return instance<IUser>({
      url: `/users/profile`,
      method: 'PUT',
      data
    })
  },
  async toggleFavorite(productId:string) {
    return instance<IUser>({
      url: `/users/favorites/${productId}`,
      method: 'PATCH',
    })
  },

}

