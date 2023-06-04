import React, {Component} from 'react';


class MenuCategories extends Component {
    render() {
        return(
            <React.Fragment>
                <ul className="list-group">
                    <a href='#'><li className="list-group-item active rounded" aria-current="true">BREAD</li></a>
                    <a href='#'><li className="list-group-item rounded">CAKES</li></a>
                    <a href='#'><li className="list-group-item rounded">COOKIES</li></a>
                    <a href='#'><li className="list-group-item rounded">PASTRIES</li></a>
                    <a href='#'><li className="list-group-item rounded">SANDWICHES</li></a>
                    <a href='#'><li className="list-group-item rounded">COFFEE + TEA</li></a>
                    <a href='#'><li className="list-group-item rounded">SPECIALTY</li></a>
                </ul>
            </React.Fragment>
        )
    }
}


export default MenuCategories;