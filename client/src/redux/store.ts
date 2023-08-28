import { configureStore } from '@reduxjs/toolkit'
import NavbarReducer from './slices/NavbarSlice'
import AuthReducer from './slices/AuthSlice'
import ProductReducer from './slices/Product'
import ModalReducer from './slices/ModalSlice'
// import FormReducer from './slices/FormSlice'

export const store = configureStore({
  reducer: {
    navbar:NavbarReducer,
    auth: AuthReducer,
    product: ProductReducer,
    modal: ModalReducer,
    // form: FormReducer 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch