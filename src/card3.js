import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo  from'./téléchargement.png';
import  arr from './prodacte';

function card3() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.it-tunisie.tn/wp-content/uploads/2020/09/APPLE-Watch-Serie-6-Noir.jpg.webp"/>
    <Card.Body>
      <Card.Title>{arr[2].name}</Card.Title>
      <Card.Text>
      {arr[2].description}.
      </Card.Text>
      <h2>{arr[2].price}</h2>
      <Button variant="primary">ajouter</Button>
    </Card.Body>
  </Card>
  )
}

export default card3