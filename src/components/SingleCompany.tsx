import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchCompany, sortCompanies } from './companiesSlice'
import { CompaniesDispatch, RootState } from '../types'

const SingleCompany = () => {
  const { singleCompany, isLoading, error, searchInput } = useSelector(
    (state: RootState) => state.companiesReducer
  )

  const dispatch: CompaniesDispatch = useDispatch()

  const { idNumber } = useParams()

  useEffect(() => {
    if (idNumber) {
      dispatch(fetchCompany(Number(idNumber)))
    }
  }, [dispatch, idNumber])

  if (isLoading) {
    return <p>Data is loading</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      {singleCompany && (
        <article>
          <img src={singleCompany.avatar_url} alt={singleCompany.login} />
          <p>
            {singleCompany.id}: {singleCompany.login}
          </p>
          <p>url: {singleCompany.url}</p>
          <p>description: {singleCompany.description}</p>
          <p>events: {singleCompany.events_url}</p>
          <p>events: {singleCompany.events_url}</p>
          <p>hooks: {singleCompany.hooks_url}</p>
          <p>membres: {singleCompany.members_url}</p>
          <p>public membres: {singleCompany.public_members_url}</p>
          <p>issues: {singleCompany.issues_url}</p>
          <p>node: {singleCompany.node_id}</p>
          <p>repos: {singleCompany.repos_url}</p>
        </article>
      )}
    </div>
  )
}

export default SingleCompany
