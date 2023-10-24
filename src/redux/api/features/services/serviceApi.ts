import { baseApi } from "../../baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getService: build.query({
      query: (queryParams) => ({
        url: "/service",
        method: "GET",
        params: queryParams
      }),
    
    }),
  }),
});


  
  export const {useGetServiceQuery} = serviceApi