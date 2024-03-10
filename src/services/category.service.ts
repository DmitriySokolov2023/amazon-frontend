import Cookies from 'js-cookie';
import axios from 'axios';
import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface';
import * as process from 'process';
import { headers } from 'next/headers';
import { getContentType } from '@/api/api.helper';
import { saveToStorage } from '@/services/auth/auth.helper';
import { instance } from '@/api/api.interceptor';
import { ICategory } from '@/types/category.interface';

export const CategoryService = {
  async getAll() {
    return instance<ICategory[]>({
      url: `/category`,
      method: 'GET',
    })
  },
  async getById(id:string | number) {
    return instance<ICategory>({
      url: `/category/${id}`,
      method: 'GET',
    })
  },
  async getBySlug(slug:string) {
    return instance<ICategory>({
      url: `/category/by-slug/${slug}`,
      method: 'GET',
    })
  },
  async createCategory() {
    return instance<ICategory>({
      url: `/category`,
      method: 'POST',
    })
  },
  async updateCategory(id:string, name:string) {
    return instance<ICategory>({
      url: `/category/${id}`,
      method: 'PUT',
      data: { name }
    })
  },
  async deleteCategory(id:string) {
    return instance<ICategory>({
      url: `/category/${id}`,
      method: 'DELETE',
    })
  },
}

