import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo  from'./téléchargement.png';
import  arr from './prodacte';

function card5() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.istore.com.tn/4117-large_default/macbook-pro-13-pouces-puce-m1-8-go-256-go-couleur-gris-sideral.jpg"/>
    <Card.Body>
      <Card.Title>{arr[4].name}</Card.Title>
      <Card.Text>
      {arr[4].description}.
      </Card.Text>
      <h2>{arr[4].price}</h2>
      <Button variant="primary">ajouter</Button>
    </Card.Body>
  </Card>
  )
}

export default card5