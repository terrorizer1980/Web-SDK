import { Link } from './Link';

export function Nav () {
  return (<nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to="/other-page">
          Other Page
        </Link>
      </li>
    </ul>
  </nav>)
}
