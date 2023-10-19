import { baseApi } from "../../baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getService: build.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
    
    }),
  }),
});


  
  export const {useGetServiceQuery} = serviceApi