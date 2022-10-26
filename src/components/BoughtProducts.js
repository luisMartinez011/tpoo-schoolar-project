import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../UseContext/Context';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import svgHeart from '../assets/images/heart.svg'

export const BoughtProducts = (props) => {
    const { boughtThings } = useContext(Context);

    return (
        <div className='p-5 text-center pb-3'>
            <h2 id='bought-top' className='h2-purchease mb-5 fw-bold bg-dark text-white rounded-1 border border-2 border-dark'>You have successfully completed your purchase!^^</h2>

            {<Row xs={1} md={4} className="g-4">
                {boughtThings?.map(troll => (
                    <Col key={troll.id}>
                        <Card className='trolley-card shadow'>
                            <Card.Img className='image w-50 p-4' variant="top" src={troll.image} />
                            <Card.Body>
                                <Card.Title className='text-bold text-center fw-bold'>{troll.title}</Card.Title>
                                <Card.Text className='text-center'>
                                    The price is: {troll.price} ₽
                                </Card.Text>
                                <div className='card-footer'>
                                    Total:
                                    {' ' + troll.price * troll.quantity} ₽
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            }
            <h2 id='h2-bought' className='w-50 h2-purchease mt-5 fw-bold bg-dark text-white rounded-1 border border-2 border-dark'>It'll be sent to your home soon!
                <img className='svg-heart ms-2' src={svgHeart} alt='svgHeart' />
            </h2>

            <Link to='/trolley' >
                <button type="button" className="button-back btn btn-dark mt-4">Go back!</button>
            </Link>
        </div>
    )
}
