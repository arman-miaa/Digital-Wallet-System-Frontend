import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1",

    baseUrl: "https://digital-wallet-management-system-nine.vercel.app/api/v1",

    credentials: "include",
  }),
  tagTypes: ["Admin", "User", "Agent", "Auth"],
  endpoints: () => ({}),
});
