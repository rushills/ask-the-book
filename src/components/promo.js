/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

const Promo = () => {
  /*
  const data = useStaticQuery(graphql`
    query PromoQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
*/
  return (
    <div className="bio">
      You can ask your questions to books yourself with <a href="https://www.tema-editor.app">tema-editor.app</a>
    </div>
  )
}

export default Promo
