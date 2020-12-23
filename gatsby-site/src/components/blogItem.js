import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'gatsby'

const blogItem = (props) => {
  const {title, date, thumbnail} = props
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {date}
        </Card.Text>
        <Link to="/">see more</Link>
      </Card.Body>
    </Card>
  )
}

export default blogItem
