import { baseApi } from "./api/baseApi";
import serviceSlice from "./api/features/services/serviceSlice";
export const reducer = {
   [baseApi.reducerPath]: baseApi.reducer,
   service:serviceSlice

}

