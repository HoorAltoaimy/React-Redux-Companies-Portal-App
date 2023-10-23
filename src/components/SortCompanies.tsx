import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { sortCompanies } from './companiesSlice'

const SortCompanies = () => {
  const dispatch = useDispatch()

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    let sortItem = event.target.value;
    dispatch(sortCompanies(sortItem));
  }

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select name="sort" id="sort" onChange={handleOptionChange}>
        <option value="id" defaultValue="ID">
          ID
        </option>
        <option value="login">Name</option>
      </select>
    </div>
  )
}

export default SortCompanies
