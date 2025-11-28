import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: ["Kpis","Products","Transaction"],  //info is saved in tag types
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({       //<response,>
            query: ()=> "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({       //<response,>
            query: ()=> "product/products/",
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({       //<response,>
            query: ()=> "transaction/transactions/",
            providesTags: ["Transaction"]
        }),
    })
})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;