import { instance } from '@/api/api.interceptor';
import { IProduct } from '@/types/product.interface';
import { TypeProductDataFilters, TypeProduct } from '@/services/product/product.types';
import { ICategory } from '@/types/category.interface';



export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    return instance<IProduct[]>({
      url: `/products`,
      method: 'GET',
      params:queryData
    })
  },
  async getSimilar(productId:string | number) {
    return instance<IProduct[]>({
      url: `/products/similar/${productId}`,
      method: 'GET',
    })
  },

  async getBySlag(slug:string) {
    return instance<IProduct>({
      url: `/products/${slug}`,
      method: 'GET',
    })
  },
  async getByCategory(categorySlag:string) {
    return instance<IProduct[]>({
      url: `/products/category/${categorySlag}`,
      method: 'GET'
    })
  },
  async getById(id:string) {
    return instance<IProduct>({
      url: `/products/${id}`,
      method: 'GET',
    })
  },

  async createProduct() {
    return instance<IProduct>({
      url: `/products`,
      method: 'POST',
    })
  },
  async updateProduct(id:string, data:TypeProduct) {
    return instance<IProduct>({
      url: `/products/${id}`,
      method: 'PUT',
      data
    })
  },
  async deleteProduct(id:string) {
    return instance<IProduct>({
      url: `/products/${id}`,
      method: 'DELETE',
    })
  },

}

