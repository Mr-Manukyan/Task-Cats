import { configureStore } from '@reduxjs/toolkit'
import { catsReducer } from '../Reducers/Cats-Reducer'

const rootReducer = () => ({
    catsPage: catsReducer
})

export const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

window.store = store

export default store