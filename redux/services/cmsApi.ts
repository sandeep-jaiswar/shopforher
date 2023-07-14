import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Category = {
  id: number;
  cname: string;
};

type Product = {
  id: string;
  pname: string;
  pdesc: string;
  cid: string
}

type GetDataResponse<T> = {
  data: T[]
  status: string
}

type GetDataByIdResponse<T>  = {
  data: T
  status: string
}

export const cmsApi = createApi({
  reducerPath: "cmsApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
  }),
  endpoints: (builder) => ({
    getCategory: builder.query<Category[], null>({
      query: () => "/cms/category",
      transformResponse: (response : GetDataResponse<Category>) => response.data,
    }),
    getCategoryById: builder.query<Category, { id: string }>({
      query: ({ id }) => `/cms/category/${id}`,
      transformResponse: (response : GetDataByIdResponse<Category>) => response.data,
    }),
    getProduct: builder.query<Product[], null>({
      query: () => "/cms/product",
      transformResponse: (response : GetDataResponse<Product>) => response.data,
    }),
    getProductById: builder.query<Product, { id: string }>({
      query: ({ id }) => `/cms/product/${id}`,
      transformResponse: (response : GetDataByIdResponse<Product>) => response.data,
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetCategoryByIdQuery,
  useGetProductQuery,
  useGetProductByIdQuery,
} = cmsApi;
