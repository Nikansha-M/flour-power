import React, {Component} from "react";

class Filter extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="dropdown">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        SORT BY
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item" type="button">Popularity</button>
                        <button class="dropdown-item" type="button">Latest</button>
                        <button class="dropdown-item" type="button">Alphabetically</button>
                        <button class="dropdown-item" type="button">Price, Low to High</button>
                        <button class="dropdown-item" type="button">Price, High to Low</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Filter;