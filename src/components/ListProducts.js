import React, { useState, useEffect, useContext } from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { Context } from '../UseContext/Context';

export const ListProducts = () => {

  let { setFavorites, setTrolley } = useContext(Context);

  const [dataProducts, setdataProducts] = useState([]);
  const [cargando, setCargando] = useState(true);
  // const[categorias, setCategorias] = useState([]);

  //Get Products
  const getProducts = async () => {
    const request = await fetch('https://fakestoreapi.com/products');
    const data = await request.json();

    setdataProducts(data);
    setCargando(false);
  }

  useEffect(() => {
    getProducts();
  }, []);


  //Catch data added to Favorites
  const addFavorites = (id, image, title, price) => {
    let product_to_favs = {
      id,
      image,
      title,
      price
    };
    setFavorites(product_to_favs);
  }

  //Catch data added to Trolley
  const addTrolley = (id, image, title, price) => {
    let product_to_trolley = {
      id,
      image,
      title,
      price,
      quantity: 1
    };
    setTrolley(product_to_trolley);
  }

  if (cargando === true) {

    //If Ajax request has not loaded
    return (
      <h1 className='cargando d-block mt-5 mb-5 text-center bg-dark text-white w-25 rounded-1 border border-2 border-dark'>Loading products...</h1>
    );
  } else {

    //If Ajax request has loaded
    return (
      <div className='p-4'>
        <h1 className='d-block mt-4 mb-5 text-center bg-dark text-white w-25 rounded-1 border border-2 border-dark'>Products</h1>

        <Row xs={1} md={4} className="g-4">
          {dataProducts.map(product => (
            <Col key={product.id}>
              <Card className='product-card shadow'>
                <Card.Img className='image w-50 p-4' variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className='text-bold text-center fw-bold'>{product.title}</Card.Title>
                  <Card.Text className='text-center'>
                    The price is: {product.price} ₽
                  </Card.Text>
                </Card.Body>
                <Button variant="light" onClick={() => addFavorites(product.id, product.image, product.title, product.price)}>Add to Favorites!^^</Button>
                <Button variant="dark" onClick={() => addTrolley(product.id, product.image, product.title, product.price)}>Add to trolley!</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}
