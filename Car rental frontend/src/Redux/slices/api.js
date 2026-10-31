import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const carApi = createApi({
    reducerPath: "carApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/api/v1/"}),
    endpoints: (builder) =>({
        getCars: builder.query({
          query: ()=> "get_cars"  
        }),
        getCarById: builder.query({
            query: (idValue) =>`get_cars/${idValue}`
        })
    })
})


export const {useGetCarsQuery,useGetCarByIdQuery} = carApi