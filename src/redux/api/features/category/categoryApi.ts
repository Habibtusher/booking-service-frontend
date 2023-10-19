import { baseApi } from "../../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    
    }),
  }),
});


  
  export const {useGetCategoryQuery} = categoryApi