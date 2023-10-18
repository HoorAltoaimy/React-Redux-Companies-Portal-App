import { useEffect } from 'react'
import { fetchData } from './companiesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

type Company = {
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

const Companies = () => {
  const { items, loading, error } = useSelector((state: RootState) => state.companiesR)

  const dispatch01 = useDispatch()

  useEffect(() => {
    dispatch01(fetchData())
  }, [dispatch01])

  if (loading) {
    return <p>Data is loading</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  return (
    <div>
      <h2>Companies</h2>
      {items.length > 0 &&
        items.map((company: Company) => {
          return (
            <article key={company.id}>
              <p>
                {company.id}: {company.login}
              </p>
              <p>{company.url}</p>
            </article>
          )
        })}
    </div>
  )
}

export default Companies
