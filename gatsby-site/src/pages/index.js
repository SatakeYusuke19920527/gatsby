import React from "react"
import Layout from "../components/layout"
import Kv from '../components/kv'
import { Col, Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogItem from '../components/blogItem';
import {graphql,useStaticQuery} from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter{
          title,
          date,
          thumbnail{
            childImageSharp{
              fluid{
                src
              }
            }
          }
        }
      }
    }
  }
}
  `)
  console.log(data.allMarkdownRemark)
  return (
    <Layout>
      <Kv />
      <Container>
        <Row>
          {
            data.allMarkdownRemark.edges.map((edge,index) => {
              return (
                <Col sm={4} key={index}>
                  <BlogItem
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    thumbnail={edge.node.frontmatter.thumbnail.childImageSharp.fluid.src} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
