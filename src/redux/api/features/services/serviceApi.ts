

import { baseApi } from "../../baseApi";

const serviceApi: any = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getService: build.query({
      query: (queryParams) => ({
        url: "/service",
        method: "GET",
        params: queryParams,
      }),
      providesTags: ["service"],
    }),
    addService: build.mutation({
      query: (data: any) => ({
        url: "/service",
        method: "POST",
        data,
      }),
      invalidatesTags: ["service"],
    }),
    singleServiceGet: build.query({
      query: (id) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
      providesTags: ["service"],
    }),
  }),
});

export const { useGetServiceQuery,useSingleServiceGetQuery, useAddServiceMutation } = serviceApi;
