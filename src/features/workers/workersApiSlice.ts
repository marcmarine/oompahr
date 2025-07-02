import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Favorite {
  color: string
  food: string
  random_string: string
  song: string
}

interface Worker {
  id: number
  first_name: string
  last_name: string
  favorite: Favorite
  gender: string
  image: string
  profession: string
  email: string
  age: number
  country: string
  height: number
}

interface WorkersApiResponse {
  current: number
  results: Worker[]
  total: number
}

interface WorkerApiResponse extends Worker {
  description: string
  quota: string
}

export const workersApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + '/oompa-loompas',
  }),
  reducerPath: 'workersApi',

  endpoints: (build) => ({
    getWorkers: build.infiniteQuery<Worker[], void, number>({
      query({ pageParam }) {
        return `?page=${pageParam}`
      },
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
          lastPageParam + 1,
      },

      transformResponse: (response: WorkersApiResponse) => response.results,
    }),
    getWorkerById: build.query<WorkerApiResponse, number>({
      query: (id) => `/${id}`,
    }),
  }),
})

export const { useGetWorkersInfiniteQuery, useGetWorkerByIdQuery } =
  workersApiSlice
