import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './rootSlice'

export const store = configureStore({
  reducer
})