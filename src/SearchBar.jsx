import React, { useState, Component } from 'react';

class SearchBar extends Component {
    render() {
        const SearchBar = () => {}
        const [searchInput, setSearchInput] = useState("");
        const products = [
            { name: 'Sourdough', category: 'Bread'},
            { name: 'English Muffin', category: 'Bread'},
            { name: 'Baguette', category: 'Bread'},
            { name: 'Ciabatta', category: 'Bread'},
            { name: 'Blackout', category: 'Cakes'},
            { name: 'Chiffon', category: 'Cakes'},
            { name: 'Pound', category: 'Cakes'},
            { name: 'Opera', category: 'Cakes'},
            { name: 'Chocolate Chip', category: 'Cookies'},
            { name: 'White Chocolate Macadamia Nut', category: 'Cookies'},
            { name: 'Apple Crumb Pie', category: 'Cookies'},
            { name: 'Ginger-Molasses', category: 'Cookies'},
            { name: 'Croissant', category: 'Pastries'},
            { name: 'Ham & Cheese Croissant', category: 'Pastries'},
            { name: 'Morning Bun', category: 'Pastries'},
            { name: 'Kouign-Amann', category: 'Pastries'},
            { name: 'BLT', category: 'Sandwiches'},
            { name: 'Chicken', category: 'Sandwiches'},
            { name: 'Tuna Melt', category: 'Sandwiches'},
            { name: 'Egg Salad', category: 'Sandwiches'},
            { name: 'Iced Coffee', category: 'Coffee + Tea'},
            { name: 'Latte', category: 'Coffee + Tea'},
            { name: 'Cappuccino', category: 'Coffee + Tea'},
            { name: 'Cold Brew', category: 'Coffee + Tea'},
            { name: 'Chrysanthemum', category: 'Coffee + Tea'},
            { name: 'Matcha', category: 'Coffee + Tea'},
            { name: 'Oolong', category: 'Coffee + Tea'},
            { name: 'Rooibos', category: 'Coffee + Tea'},
            { name: 'Coffee Beans - Arabica', category: 'Specialty'},
            { name: 'Tea Strainer', category: 'Specialty'},
            { name: 'Coffee Mug', category: 'Specialty'},
            { name: 'Loose Leaf Tea - Wild Huckleberry', category: 'Specialty'},
        ];

        const handleChange = (e) => {
            e.preventDefault();
            setSearchInput(e.target.value);
        };

    if (searchInput.length > 0) {
        products.filter((product) => {
            return product.name.match(searchInput);



    return <div>
        <input
            type='search'
            placeholder='Search'
            onChange={handleChange}
            value={searchInput} />

        <table>
            <tr>
                <th>Product</th>
                <th>Category</th>
            </tr>

            {products.map((product, index) => {
                <div>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                    </tr>
                </div>
            })}
        </table>
    </div>
    });
    }
}
}
export default SearchBar;

