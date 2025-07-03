import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { workersApiSlice } from '../features/workers/workersApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

const rootReducer = combineSlices(workersApiSlice)

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(workersApiSlice.middleware),
    preloadedState,
  })
  setupListeners(store.dispatch)

  return store
}

export const store = makeStore()

export type AppStore = typeof store
export type RootState = ReturnType<typeof rootReducer>
