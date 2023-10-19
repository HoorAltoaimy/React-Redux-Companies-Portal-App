import { configureStore } from '@reduxjs/toolkit'
import companiesSlice from './components/companiesSlice'

const store = configureStore({
  reducer: {
    companiesR: companiesSlice
  }
})

export default store
