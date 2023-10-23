import { ThunkDispatch } from '@reduxjs/toolkit'
import companiesSlice, { fetchCompanies, fetchCompany } from './components/companiesSlice'

export type Company = {
  avatar_url: string
  description: null
  events_url: string
  hooks_url: string
  id: number
  issues_url: string
  login: string
  members_url: string
  node_id: string
  public_members_url: string
  repos_url: string
  url: string
}

export type CompaniesState = {
  companies: Company[]
  isLoading: boolean
  error: string | null
  searchInput: string
  singleCompany: Company | null
}

export type RootState = {
  companiesReducer: ReturnType<typeof companiesSlice>
}

// typeing dispatch
type searchCompanyAction = {
  type: 'companies/searchCompany'
  payload: string
}

type sortCompanyAction = {
  type: 'companies/sortCompanies'
  payload: string
}

type FetchCompaniesPendingAction = ReturnType<typeof fetchCompanies.pending>
type FetchCompaniesFulfilledAction = ReturnType<typeof fetchCompanies.fulfilled>
type FetchCompaniesRejectedAction = ReturnType<typeof fetchCompanies.rejected>

type FetchCompanyPendingAction = ReturnType<typeof fetchCompany.pending>
type FetchCompanyFulfilledAction = ReturnType<typeof fetchCompany.fulfilled>
type FetchCompanyRejectedAction = ReturnType<typeof fetchCompany.rejected>

export type CompaniesAction =
  | FetchCompaniesPendingAction
  | FetchCompaniesFulfilledAction
  | FetchCompaniesRejectedAction
  | FetchCompanyPendingAction
  | FetchCompanyFulfilledAction
  | FetchCompanyRejectedAction
  | searchCompanyAction
  | sortCompanyAction

export type CompaniesDispatch = ThunkDispatch<RootState, void, CompaniesAction> //arguments<the slice type, return type, the actions that will be dispatched>
