import { configureStore } from '@reduxjs/toolkit'
import { workersApiSlice } from '../features/workers/workersApiSlice'

export const store = configureStore({
  reducer: {
    [workersApiSlice.reducerPath]: workersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(workersApiSlice.middleware)
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof workersApiSlice.reducer>
