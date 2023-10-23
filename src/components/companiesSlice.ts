import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CompaniesState } from '../types'

const initialState: CompaniesState = {
  companies: [],
  isLoading: false,
  error: null,
  searchInput: '',
  singleCompany: null
}

//any API call has to be inside createAsyncThunk(action type, asynchronus call)
export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  try {
  const response = await fetch('https://api.github.com/organizations')
  if (!response.ok) {
    throw new Error('Network erroe')
  }
  const data = await response.json()
  return data
} catch (error) {
  console.log(error)
}
})

export const fetchCompany = createAsyncThunk('companies/fetchCompany', async (id: number) => {
  const response = await fetch(`https://api.github.com/orgs/${id}`)
  if (!response.ok) {
    throw new Error('Network erroe')
  }
  const data = await response.json()
  return data
})

const companiesReducer = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {
    searchCompany: (state, action) => {
      state.searchInput = action.payload
    },
    sortCompanies: (state, action) => {
      const sortingCriteria = action.payload
      if (sortingCriteria === 'login') {
        state.companies.sort((a, b) => a.login.localeCompare(b.login))
      } else if (sortingCriteria === 'id') {
        state.companies.sort((a, b) => a.id - b.id)
      }
    }
  },
  //extraReducers is the function that we need to make any async call of the three states (pending, fulfilled, rejected)
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.isLoading = false
        state.companies = action.payload
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Error'
      })
      .addCase(fetchCompany.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCompany.fulfilled, (state, action) => {
        state.isLoading = false
        state.singleCompany = action.payload
      })
      .addCase(fetchCompany.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Error'
      })
  }
})

export const { searchCompany, sortCompanies } = companiesReducer.actions
export default companiesReducer.reducer
