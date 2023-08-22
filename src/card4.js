import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo  from'./téléchargement.png';
import  arr from './prodacte';

function card4() {
    var name="x";
    var firstname=""
  return (
    <Card style={{ width: '18rem' }}>
    {firstname?<Card.Img variant="top" src="https://www.apple.com/newsroom/images/product/tv/standard/4k_screen_and_appletv_big.jpg.large.jpg"/>:null}
    <Card.Body>
      <Card.Title>{name?"hello":"hello there}"}</Card.Title>
      <Card.Text>
      {arr[3].description}.
      </Card.Text>
      <h2>{arr[3].price}</h2>
      <Button variant="primary">ajouter</Button>
    </Card.Body>
  </Card>
  )
}

export default card4