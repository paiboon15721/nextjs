import Link from 'next/link'
import Container from './Container'

export default props => (
  <Container>
    <ul>
      <li>
        <Link href="/">
          <a>index</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>about</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <button>Go to About Page</button>
        </Link>
      </li>
    </ul>
    {props.children}
  </Container>
)
