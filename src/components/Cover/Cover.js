import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { SCover } from './SCover'

const Cover = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jpg/cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <SCover>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </SCover>
  )
}

export default Cover
