import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo  from'./téléchargement.png';
import  arr from './prodacte';

function card() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.scoop.com.tn/36595-thickbox_default/pc-portable-apple-macbook-air-apple-m1-8go-256go-ssd-ecran-retina-13-grey.jpg"/>
    <Card.Body>
      <Card.Title>{arr[0].name}</Card.Title>
      <Card.Text>
      {arr[0].description}
      </Card.Text>
      <h2>{arr[0].price}</h2>
      <Button variant="primary">ajouter</Button>
    </Card.Body>
  </Card>
  )
}

export default card