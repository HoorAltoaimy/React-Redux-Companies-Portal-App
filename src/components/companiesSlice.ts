import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  loading: false,
  error: null
}

//any API call has to be inside createAsyncThunk(action type, asynchronus call)
export const fetchData = createAsyncThunk('companice/fetchData', async () => {
  const response = await fetch('https://api.github.com/organizations')
  const data = await response.json()
  return data
})

const companiesReducer = createSlice({
  name: 'companies',
  initialState: initialState,
  reducers: {},
  //extraReducers is the function that we need to make any async call of the three states (pending, fulfilled, rejected)
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = false
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default companiesReducer.reducer
