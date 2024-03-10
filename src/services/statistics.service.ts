import { instance } from '@/api/api.interceptor';
import { TypeStatistics } from '@/services/types/statistics.type';


export const StatisticsService = {
  async getMain() {
    return instance<TypeStatistics>({
      url: `/statistics`,
      method: 'GET',
    })
  },
}

