import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../UseContext/Context'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const Favorites = () => {

  const [favoriteStorage, setFavoriteStorage] = useState();

  const { favorites, setTrolley } = useContext(Context);

  //SetFavorites to be shown on screen
  useEffect(() => {
    let getStorage = JSON.parse(localStorage.getItem('favorites'));

    setFavoriteStorage(getStorage);
  }, [favorites]);

  //Remove from favorites
  const removeFavs = (id) => {
    let getStorage = JSON.parse(localStorage.getItem('favorites'));
    let filtered_array = getStorage.filter(item => item.id !== id);
    
    setFavoriteStorage(filtered_array);

    localStorage.setItem('favorites', JSON.stringify(filtered_array));
  }

  //Add to trolley from favorites
  const addToTrolley = (id, image, title, price) => {
    
    let favorite_to_trolley = {
      id,
      image,
      title,
      price,
      quantity: 1
    };

    setTrolley(favorite_to_trolley);
  }

  return (
    <div className='p-4'>
      <h2 className='text-white bg-dark w-25 rounded-1 text-center mt-3 mb-5 border border-2 border-dark'>Favorites</h2>

      <Row xs={1} md={4} className="g-4">
        {favoriteStorage?.map(favorite => (
          <Col key={favorite.id}>
            <Card className='product-card shadow'>
              <Card.Img className='image w-50 p-4' variant="top" src={favorite.image} />
              <Card.Body>
                <Card.Title className='text-bold text-center fw-bold'>{favorite.title}</Card.Title>
                <Card.Text className='text-center'>
                  The price is: {favorite.price} ₽
                </Card.Text>
              </Card.Body>
              <Button variant="light" onClick={() => addToTrolley(favorite.id, favorite.image, favorite.title, favorite.price)}>Add to trolley!^^</Button>
              <Button variant="dark" onClick={() => removeFavs(favorite.id)}>Remove from favorites!^^</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}