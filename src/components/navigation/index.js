import React from 'react'

const Navbar = props => {

    const handleChange = e => props.onClick(e.target.id);
   
    return (
        <ul>
            {props.routes.map(route => (
                <li>
                    <button style={ props.current == route ? { background: "blue" } : {} } id={route} onClick={handleChange}>
                        {route.toUpperCase()}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Navbar;