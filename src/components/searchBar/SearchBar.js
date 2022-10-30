import Form from 'react-bootstrap/Form';
import React, { useState, useContext, useMemo } from "react";
import { Typeahead } from 'react-bootstrap-typeahead';
import Button from 'react-bootstrap/Button';
import { Context } from '../../UseContext/Context';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const location = useLocation();
    const [singleSelections, setSingleSelections] = useState([]);
    const { setdataProducts, data } = useContext(Context);
    const options = useMemo(() => data.map(({ title }) => title), [data]);





    const handleChange = (e) => {
        setSingleSelections(e)
        if (e.length === 0) setdataProducts(data);
    }

    const handleSubmit = (e) => {
        console.log()
        e.preventDefault();
        const productos = data.find(({ title }) => {
            return title === singleSelections.toString()
        })
        if (!productos) return;
        setdataProducts([productos])
    }

    return (
        <Form className="d-flex  justify-content-center me-0" onSubmit={handleSubmit}>

            <Typeahead
                disabled={(location.pathname === "/home" || location.pathname === "/") ? false : true}
                className='m-0'
                id="basic-typeahead-single"
                labelKey="name"
                onChange={handleChange}
                options={options}
                placeholder="Choose a product..."
                selected={singleSelections}
            />
            <Button className="ms-2" variant="outline-success" type="submit">Search</Button>
        </Form>
    )
}

export default SearchBar