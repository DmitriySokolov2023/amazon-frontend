import Cookies from 'js-cookie';
import axios from 'axios';
import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface';
import * as process from 'process';
import { headers } from 'next/headers';
import { getContentType } from '@/api/api.helper';
import { saveToStorage } from '@/services/auth/auth.helper';
import { instance } from '@/api/api.interceptor';

export const AuthService = {
  async main(type:'login' | 'register', data:IEmailPassword){
    const response = await instance<IAuthResponse>({
      url:`/auth/${type}`,
      method:'POST',
      data
    })

    if (response.data.accessToken) saveToStorage(response.data)

    return response.data
  },
  async getNewTokens(){
    const refreshTokens = Cookies.get('refresh-token')

    const response = await axios.post<string, {data:IAuthResponse}>(
      process.env.SERVER_URL + '/auth/login/access-token',
      {refreshTokens},
      {
        headers: getContentType()
      },
    )
    if (response.data.accessToken) saveToStorage(response.data)
  }
}

