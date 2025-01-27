import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="vishaka">
      <Link to="/">
      Vishaka Nirmal
      </Link></h1>
    <Link to="/work" activeClassName="active">Work</Link>
    <Link to="/misc" activeClassName="active">Play</Link>
    <Link to="/about" activeClassName="active">About</Link>
  </header>
)

export default Header