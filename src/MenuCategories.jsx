import React, {Component} from 'react';


class MenuCategories extends Component {
    render() {
        return(
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item active" aria-current="true">BREAD</li>
                    <li className="list-group-item">CAKES</li>
                    <li className="list-group-item">COOKIES</li>
                    <li className="list-group-item">PASTRIES</li>
                    <li className="list-group-item">SANDWICHES</li>
                    <li className="list-group-item">COFFEE + TEA</li>
                    <li className="list-group-item">SPECIALTY</li>
                </ul>
            </React.Fragment>
        )
    }
}


export default MenuCategories;