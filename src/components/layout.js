import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>&nbsp;and&nbsp;AI powered <a href="https://www.tema-editor.app">Tema-Editor</a>.
        <div>
          <a href="https://apps.apple.com/us/app/tema-editor/id6447260432?mt=12">
          <StaticImage
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/app-store-mac.png"
        alt="Get Tema-Editor on AppStore for macOS"
      />
          </a>

          <a href="/rss.xml">
            <StaticImage
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              height = "32"
              src="../images/rss.png"
            alt="RSS feed for Ask the Book Blog"
        /></a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
