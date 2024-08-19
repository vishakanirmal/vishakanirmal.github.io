import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/">Work</Link>
    <Link to="/about">About</Link>
  </header>
)

export default Header