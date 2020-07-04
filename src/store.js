import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './rootSlice'

const store = configureStore({
  reducer
})

export default store