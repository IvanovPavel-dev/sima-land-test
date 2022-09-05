import axios, { AxiosResponse } from 'axios';
import {  CategoryType } from 'types/categories';

const API_URL = 'https://www.sima-land.ru/api/v3/'



export const api = axios.create({
  baseURL: API_URL,
});

export const fetchCategories = (
  
): Promise<AxiosResponse<{ data: CategoryType[] }>> =>
  api.get('category/?expand=sub_categories&level=1');

export const fetchSubCategories = (category: { path: any; level: any; }): Promise<AxiosResponse<{ data: CategoryType[] }>> =>
   {

    return api.get(`category/?path=${category.path}&level=${category.level+1}&expand=sub_categories`)
  };
  export const fetchGoods = (category: { id: any }): Promise<AxiosResponse<{ data: CategoryType[] }>> =>
  {
   console.log('category.id',category.id)
   return api.get(`item/?category_id=${category.id}`)
 };


