// src/NavStrip.js

import React from 'react';
import './header.scss'; // Import the CSS file for styling

const categories = [
    { name: 'Outdoor', path: '/outdoor' },
    { name: 'Bedding & Bath', path: '/bedding-bath' },
    { name: 'Rugs', path: '/rugs' },
    { name: 'Décor & Pillows', path: '/decor-pillows' },
    { name: 'Lighting', path: '/lighting' },
    { name: 'Organization', path: '/organization' },
    { name: 'Kitchen', path: '/kitchen' },
    { name: 'Baby & Kids', path: '/baby-kids' },
    { name: 'Home Improvement', path: '/home-improvement' },
    { name: 'Appliances', path: '/appliances' },
    { name: 'Pet', path: '/pet' },
    { name: 'Holiday', path: '/holiday' },
    { name: 'Shop by Room', path: '/shop-by-room' },
    { name: 'Sale', path: '/sale' },
];

const NavStrip = () => {
    return (
        <nav className="link-strip">
            {categories.map((category) => (
                <a key={category.path} href={category.path}>
                    {category.name}
                </a>
            ))}
        </nav>
    );
};

export default NavStrip;
