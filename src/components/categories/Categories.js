import React, { useContext, useMemo } from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Context } from '../../UseContext/Context';
import { useLocation } from 'react-router-dom';


export const Categories = () => {
    const location = useLocation();
    const { setdataProducts, data } = useContext(Context);
    const categories = useMemo(() => [...new Set(data.map(({ category }) => category))], [data]);


    const handleSelection = (e) => {
        setdataProducts(data.filter(({ category }) => {
            return category === e
        }))
    }

    return (
        <NavDropdown title="Dropdown" id="basic-nav-dropdown"
            className='text-center menu-link text-light opacity-100 '
            disabled={(location.pathname === "/home" || location.pathname === "/") ? false : true}
        >
            {categories.map((category, index) => (

                <NavDropdown.Item key={index.toString()} onClick={() => handleSelection(category)}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </NavDropdown.Item>
            ))}
        </NavDropdown>

    )
}
