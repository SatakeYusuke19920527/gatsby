import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

export default function About() {
  const data = useStaticQuery(
    graphql`
        query {
          markdownRemark{
            frontmatter{
              title,
              date
          }
        }
      }
    `
  )
  console.log(data, "graphql 確認")
  return (
    <Layout>
      <h1>Title</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
      <p>
        message
      </p>
    </Layout>
  )
}