import Form from 'react-bootstrap/Form';
import React, { useState, useContext } from "react";
import {
    Typeahead
} from 'react-bootstrap-typeahead';
import Button from 'react-bootstrap/Button';
import { Context } from '../../UseContext/Context';
const SearchBar = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const { data } = useContext(Context);

    const options = data.map(({ title }) => {
        return title
    })
    console.log(options)
    return (
        // <Form className="d-flex me-0">
        //     <Form.Control
        //         type="search"
        //         placeholder="Search"
        //         className="me-2"
        //         aria-label="Search" onChange={handleChange}
        //         value={message} >

        //     </Form.Control>
        //     <Button variant="outline-success">Search</Button>

        // </Form>
        <Form.Group className="d-flex me-0">
            <Form.Label>Single Selection</Form.Label>
            <Typeahead
                id="basic-typeahead-single"
                labelKey="name"
                onChange={setSingleSelections}
                options={options}
                placeholder="Choose a state..."
                selected={singleSelections}
            />
            <Button variant="outline-success">Search</Button>
        </Form.Group>
    )
}

export default SearchBar