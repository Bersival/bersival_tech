import {combineReducers, configureStore} from '@reduxjs/toolkit'
import TestSlice from './reducers/TestSlice'

import {createLogger} from 'redux-logger'
const rootReducer = combineReducers({
  test: TestSlice,
})

const logger = createLogger({
  collapsed: true,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   ignoredActions: ['messages/sendMessage'],
    // },
  }).concat(logger),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
