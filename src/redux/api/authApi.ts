import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: (data) => ({
        url: `/users/${data}`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: `/users/update-profile/${data.email}`,
        method: "PATCH",
        data: data.data,
      }),
      invalidatesTags: ["profile"],
    }),
    uploadProfileImage: build.mutation({
      query: (data) => ({
        url: `/users/${data.email}`,
        method: "PATCH",
        data: data.image,
      }),
      invalidatesTags: ["profile"],
    }),
   
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    userRegister: build.mutation({
      query: (registerData) => ({
        url: `/users/create`,
        method: "POST",
        data: registerData,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useUploadProfileImageMutation,
  useUserLoginMutation,
  useUserRegisterMutation,
  useGetSingleUserQuery,
  useUpdateProfileMutation
} = authApi;
