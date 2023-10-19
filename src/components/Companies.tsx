import { ChangeEvent, useEffect } from 'react'
import { fetchCompanies, searchCompany } from './companiesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CompaniesDispatch, Company, RootState } from '../types'
import SortCompanies from './SortCompanies'
import { Link } from 'react-router-dom'

const Companies = () => {
  const { companies, isLoading, error, searchInput } = useSelector(
    (state: RootState) => state.companiesR
  ) //useSelectore to use the store

  const dispatch: CompaniesDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCompanies())
  }, [dispatch])

  if (isLoading) {
    return <p>Data is loading</p>
  }
  if (error) {
    return <p>{error}</p>
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCompany(event.target.value))
  }

  const filteredCompanies = searchInput
    ? companies.filter((company) =>
        company.login.toLocaleLowerCase().includes(searchInput.toLowerCase())
      )
    : companies

  return (
    <div>
      <h2>Companies</h2>
      <div className="actions">
        <form>
          <label htmlFor="searchInput">Search by company name: </label>
          <input
            type="text"
            id="searchInput"
            placeholder="Search"
            onChange={handleSearch}
            value={searchInput}
          />
        </form>
        <SortCompanies />
      </div>
      <section className="companies">
        {filteredCompanies.length > 0 &&
          filteredCompanies.map((company: Company) => {
            const { id, avatar_url, login, url } = company
            return (
              <article key={id} className="company">
                <img src={avatar_url} alt={login} />
                <p>
                  {id}: {login}
                </p>
                <p>{url}</p>
                <Link to={`/companies/${id}`}>
                  <button>Show more</button>
                </Link>
              </article>
            )
          })}
      </section>
    </div>
  )
}

export default Companies
