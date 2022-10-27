import Form from 'react-bootstrap/Form';
import React, { useState } from "react";

import Button from 'react-bootstrap/Button';

const SearchBar = () => {
    const [message, setMessage] = useState('');

    const handleChange = event => {
        setMessage(event.target.value);

        console.log('value is:', event.target.value);
    };
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit(value);
    //     onClose();
    // };

    return (
        <Form className="d-flex me-0">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search" onChange={handleChange}
                value={message} >

            </Form.Control>
            <Button variant="outline-success">Search</Button>

        </Form>

    )
}

export default SearchBar