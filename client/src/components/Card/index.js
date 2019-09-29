import React from "react";
import "./style.css"

class WineCard extends React.Component {
    render() {
        return (

            <div>
                <div className="card">
                <div className="row no-gutters">
                    <div className="col-sm-3">
                        <img src={this.props.picture} className="card-img wineLabel" alt="wineLabel"></img>
                    </div>
                    <div className="col-sm-9">
                        <div className="card-body" data-id={this.props.id}>
                            <h4>{this.props.name}</h4>
                            <p>{this.props.varietal}</p>
                            <p dangerouslySetInnerHTML={{ __html: this.props.shortDescription }}></p>
                            <p>{this.props.volume} ml | ${this.props.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>

                            <div className="form-row">
                                <div className="col-2">
                                    <button onClick={this.props.onAddToCart} className="btn btn-primary cartBtn">Add to Cart</button>
                                </div>
                                {this.props.onViewDetails ? (
                                    <div className="col-2">
                                        <button onClick={this.props.onViewDetails} className="btn btn-primary">View Details</button>
                                    </div>
                                ) : ""}
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div> 

           
            </div>
        )
    }
}

export default WineCard;
