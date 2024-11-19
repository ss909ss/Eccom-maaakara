import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../redux/store/store';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5001/api',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.user?.token || localStorage.getItem("token");
        console.log("Token from getState or localStorage:", token);  

        if (token) {
            headers.set("authorization", `Bearer ${token}`);
            console.log("Authorization header set:", headers.get("authorization"));
        } else {
            console.log("No token found");
        }

        return headers;
    }
});

  
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    endpoints: () => ({})
})