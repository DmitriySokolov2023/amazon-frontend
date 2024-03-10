export type TypeProduct = {
  name:string
  price:number
  description?:string
  images:string[]
  categoryId:number
}

export type TypeProductDataFilters = {
  sort?:EnumProductSort
  searchTerm?:string
  page?:string | number
  perPage?:string | number
}
export enum EnumProductSort{
  HIGH_PRISE= 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST='oldest'
}