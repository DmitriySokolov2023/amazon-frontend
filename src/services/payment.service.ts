import { instance } from '@/api/api.interceptor';
import { ICategory } from '@/types/category.interface';
import { IPaymentResponse } from '@/types/payment.interface';

const PAYMENT = 'payment'
export const PaymentService = {
  async createPayment(amount:number) {
    return await instance.post<IPaymentResponse>(PAYMENT,{amount})
  },
}

