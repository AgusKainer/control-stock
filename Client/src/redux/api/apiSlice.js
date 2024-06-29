import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/",
      providesTags: ["Stock"],
    }),
    agregarProducto: builder.mutation({
      query: (producto) => ({
        url: "/",
        method: "POST",
        body: producto,
      }),
      invalidatesTags: ["Stock"],
    }),
    actualizar: builder.mutation({
      query: (producto) => ({
        url: `/${producto.id}`,
        metohd: "PUT",
        body: producto,
      }),
      invalidatesTags: ["Stock"],
    }),
    borrar: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Stock"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAgregarProductoMutation,
  useActualizarMutation,
  useBorrarMutation,
} = api;
