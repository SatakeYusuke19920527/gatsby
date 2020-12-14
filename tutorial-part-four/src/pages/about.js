import React from "react"
import Layout from "../components/layout"
import { graphql,useStaticQuery } from "gatsby"

export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            message
          }
        }
      }
    `
  )
  console.log(data, "graphql 確認")
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
      <p>
        {data.site.siteMetadata.message}
      </p>
    </Layout>
  )
}