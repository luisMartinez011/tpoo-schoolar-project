import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../UseContext/Context';
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const Trolley = () => {
  const [trolleyStorage, setTrolleyStorage] = useState();
  const { trolley, setBoughtThings } = useContext(Context);

  //SetTrolley to be shown on screen
  useEffect(() => {
    let getStorage = JSON.parse(localStorage.getItem('trolley'));

    setTrolleyStorage(getStorage);

  }, [trolley]);

  //Remove from Trolley
  const removeTrolley = (id) => {
    let getStorage = JSON.parse(localStorage.getItem('trolley'));
    let filtered_array = getStorage.filter(item => item.id !== id);

    setTrolleyStorage(filtered_array);

    localStorage.setItem('trolley', JSON.stringify(filtered_array));
  };

  //Plus function
  const plus = (id, image, title, price, quantityParam) => {
    if (quantityParam < 20) {
      let quantity = quantityParam + 1;

      let new_quantity = {
        id,
        image,
        title,
        price,
        quantity
      }

      let found_product = trolleyStorage.findIndex(product => product.id === id);
      trolleyStorage[found_product] = new_quantity;

      setTrolleyStorage(trolleyStorage);
      localStorage.setItem('trolley', JSON.stringify(trolleyStorage));
      window.location.reload();
    } else {
      alert('You can not add 0 products or greater than 20')
    }

  };

  //Reduce function
  const reduce = (id, image, title, price, quantityParam) => {
    if (quantityParam > 1) {
      let quantity = quantityParam - 1;

      let new_quantity = {
        id,
        image,
        title,
        price,
        quantity
      }

      let found_product = trolleyStorage.findIndex(product => product.id === id);
      trolleyStorage[found_product] = new_quantity;

      setTrolleyStorage(trolleyStorage);
      localStorage.setItem('trolley', JSON.stringify(trolleyStorage));
      window.location.reload();
    } else {
      alert('You can not add 0 products or greater than 20')
    }
  };

  //Buy everything State
  setBoughtThings(trolleyStorage);

  return (
    <div className='p-4 text-center'>
      <h2 className='text-white bg-dark w-25 rounded-1 text-center mt-3 mb-5 border border-2 border-dark'>Trolley</h2>
      <Row xs={1} md={4} className="g-4">
        {trolleyStorage?.map(troll => (
          <Col key={troll.id}>
            <Card className='trolley-card shadow'>
              <Card.Img className='image w-50 p-4' variant="top" src={troll.image} />
              <Card.Body>
                <Card.Title className='text-bold text-center fw-bold'>{troll.title}</Card.Title>
                <Card.Text className='text-center'>
                  The price is: {troll.price} ₽
                </Card.Text>
              </Card.Body>
              <h5 className='fw-bold'>Quantity: </h5>
              <div className='w-50 bg-light rounded-1 text-dark mb-3 border border-2 border-dark' >
                {
                  troll.quantity
                }
              </div>

              <div className='w-50'>
                <Button className=' me-3 mb-3 w-25' variant="dark" onClick={() => reduce(troll.id, troll.image, troll.title, troll.price, troll.quantity)}>-</Button>
                <Button className='mb-3 w-25' variant="dark" onClick={() => plus(troll.id, troll.image, troll.title, troll.price, troll.quantity)}>+</Button>
              </div>

              <Button variant="dark" onClick={() => removeTrolley(troll.id)}>Remove from trolley!</Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to='/trolley/boughtProducts' >
        <button type="button" className="button btn btn-light mt-5">Buy everything!</button>
      </Link>
    </div>
  )
}
