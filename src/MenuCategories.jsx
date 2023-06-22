import React, {Component} from 'react';
import Product from './Product';

export default class MenuCategories extends Component {

    state = {products: [
            { id: 1, productName: 'Sourdough', category: 'Bread', price:12.00, quantity: 10},
            { id: 2,  productName: 'English Muffin', category: 'Bread', price:4.00, quantity: 10},
            { id: 3,  productName: 'Baguette', category: 'Bread', price:5.00, quantity: 10},
            { id: 4,  productName: 'Ciabatta', category: 'Bread', price:5.00, quantity: 10},
            { id: 5,  productName: 'Blackout', category: 'Cakes', price:12.00, quantity: 10},
            { id: 6,  productName: 'Chiffon', category: 'Cakes', price:12.00, quantity: 10},
            { id: 7,  productName: 'Pound', category: 'Cakes', price:12.00, quantity: 10},
            { id: 8,  productName: 'Opera', category: 'Cakes', price:12.00, quantity: 10},
            { id: 9,  productName: 'Chocolate Chip', category: 'Cookies', price:6.00, quantity: 10},
            { id: 10,  productName: 'White Chocolate Macadamia Nut', category: 'Cookies', price:6.00, quantity: 10},
            { id: 11,  productName: 'Apple Crumb Pie', category: 'Cookies', price:6.00, quantity: 10},
            { id: 12,  productName: 'Ginger-Molasses', category: 'Cookies', price:6.00, quantity: 10},
            { id: 13,  productName: 'Croissant', category: 'Pastries', price:5.00, quantity: 10},
            { id: 14,  productName: 'Ham & Cheese Croissant', category: 'Pastries', price:6.00, quantity: 10},
            { id: 15,  productName: 'Morning Bun', category: 'Pastries', price:7.00, quantity: 10},
            { id: 16,  productName: 'Kouign-Amann', category: 'Pastries', price:8.00, quantity: 10},
            { id: 17,  productName: 'BLT', category: 'Sandwiches', price:14.00, quantity: 10},
            { id: 18,  productName: 'Chicken', category: 'Sandwiches', price:14.00, quantity: 10},
            { id: 19,  productName: 'Tuna Melt', category: 'Sandwiches', price:14.00, quantity: 10},
            { id: 20,  productName: 'Egg Salad', category: 'Sandwiches', price:12.00, quantity: 10},
            { id: 21,  productName: 'Iced Coffee', category: 'Coffee + Tea', price:8.00, quantity: 10},
            { id: 22,  productName: 'Latte', category: 'Coffee + Tea', price:8.00, quantity: 10},
            { id: 23,  productName: 'Cappuccino', category: 'Coffee + Tea', price:9.00, quantity: 10},
            { id: 24,  productName: 'Cold Brew', category: 'Coffee + Tea', price:8.00, quantity: 10},
            { id: 25,  productName: 'Chrysanthemum', category: 'Coffee + Tea', price:7.00, quantity: 10},
            { id: 26,  productName: 'Matcha', category: 'Coffee + Tea', price:8.00, quantity: 10},
            { id: 27,  productName: 'Oolong', category: 'Coffee + Tea', price:7.00, quantity: 10},
            { id: 28,  productName: 'Rooibos', category: 'Coffee + Tea', price:7.00, quantity: 10},
            { id: 29,  productName: 'Coffee Beans - Arabica', category: 'Specialty', price:20.000, quantity: 10},
            { id: 30,  productName: 'Tea Strainer', category: 'Specialty', price:18.00, quantity: 10},
            { id: 31,  productName: 'Coffee Mug', category: 'Specialty', price:15.00, quantity: 10},
            { id: 32,  productName: 'Loose Leaf Tea - Wild Huckleberry', category: 'Specialty', price:15.00, quantity: 10},
        ],
    };

    render() {
        return (
            <div className='containr-fluid'>

                <div className='row'>
                {this.state.products.map((product) => {
                    return (
                    <Product 
                    key={product.id} 
                    id={product.id} 
                    productName={product.productName} 
                    price={product.price} 
                    quantity={product.quantity} />
                    )})}   
                </div>                 
            </div>
        );
    }

    // render() {
    //     return(
    //         <React.Fragment>
    //             <ul className="list-group">
    //                 <a href='#'><li className="list-group-item active rounded" aria-current="true">BREAD</li></a>
    //                 <a href='#'><li className="list-group-item rounded">CAKES</li></a>
    //                 <a href='#'><li className="list-group-item rounded">COOKIES</li></a>
    //                 <a href='#'><li className="list-group-item rounded">PASTRIES</li></a>
    //                 <a href='#'><li className="list-group-item rounded">SANDWICHES</li></a>
    //                 <a href='#'><li className="list-group-item rounded">COFFEE + TEA</li></a>
    //                 <a href='#'><li className="list-group-item rounded">SPECIALTY</li></a>
    //             </ul>
    //         </React.Fragment>
    //     )
    // };
}