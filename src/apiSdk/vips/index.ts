import axios from 'axios';
import queryString from 'query-string';
import { VipInterface, VipGetQueryInterface } from 'interfaces/vip';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVips = async (query?: VipGetQueryInterface): Promise<PaginatedInterface<VipInterface>> => {
  const response = await axios.get('/api/vips', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVip = async (vip: VipInterface) => {
  const response = await axios.post('/api/vips', vip);
  return response.data;
};

export const updateVipById = async (id: string, vip: VipInterface) => {
  const response = await axios.put(`/api/vips/${id}`, vip);
  return response.data;
};

export const getVipById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/vips/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVipById = async (id: string) => {
  const response = await axios.delete(`/api/vips/${id}`);
  return response.data;
};
