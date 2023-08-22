import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo  from'./téléchargement.png';
import  arr from './prodacte';

function card2() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492"/>
    <Card.Body>
      <Card.Title>{arr[1].name}</Card.Title>
      <Card.Text>
      {arr[1].description}.
      </Card.Text>
      <h2>{arr[1].price}</h2>
      <Button variant="primary">ajouter</Button>
    </Card.Body>
  </Card>
  )
}

export default card2