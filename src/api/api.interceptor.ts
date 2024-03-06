import axios from 'axios';
import * as process from 'process';
import { getContentType } from '@/api/api.helper';

const instance = axios.create({
  baseURL:process.env.SERVER_URL,
  headers:getContentType()
})
