import { configureStore } from '@reduxjs/toolkit'
import companiesSlice from './components/companiesSlice'

export type RootState = {
  companiesR: ReturnType<typeof companiesSlice>
}

const store = configureStore({
  reducer: {
    companiesR: companiesSlice
  }
})

export default store
