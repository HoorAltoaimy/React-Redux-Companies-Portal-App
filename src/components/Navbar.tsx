import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link> <Link to="/companies">Companies</Link>{' '}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
