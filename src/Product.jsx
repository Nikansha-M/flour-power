import React, {Component} from "react";

export default class Product extends Component {

    render() {
        return (
            <div className='col-lg-3'>
                <div className="card h-100 border-primary">
                    <div className='card-body'>
                        {/* <div className='text-muted'>#{this.props.id}</div> */}
                        <h5 className="card-title">{this.props.productName}</h5>
                    <div><img className='card-photo' src={this.props.photo} /></div>
                    <div className="card-text">${this.props.price}    {this.props.weight}</div>
                </div>
                </div>
            </div>
        );
    }
}