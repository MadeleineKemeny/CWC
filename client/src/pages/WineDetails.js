import React from "react";
import API from "../utils/API";
import WineCard from "../components/Card";
import VineyardList from "../components/VineyardList";
import { Link } from "react-router-dom";

class WineDetails extends React.Component {
    state = {
        wine: {},
        loading: true
    }

    componentDidMount() {
        API.getWine(this.props.match.params.id)
            .then(res => this.setState({ wine: res.data, loading: false }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className = "scroll">
            <div>
                {!this.state.loading ?
                (<div>
                    <WineCard
                    key = {this.state.wine._id}
                    id = {this.state.wine._id}
                    picture = {this.state.wine.pictures[0].base_url + this.state.wine.pictures[0].public_id}
                    name = {this.state.wine.name}
                    varietal = {this.state.wine.varietal}
                    shortDescription = {this.state.wine.longDescription || this.state.wine.shortDescription}
                    volume = {this.state.wine.volume}
                    price = {this.state.wine.price}
                    onAddToCart = {() => this.props.onAddToCart(this.state.wine)}
                    winelink = "/wines"
                    btnName = "Back to Browse"
                    >
                    </WineCard>
                    <VineyardList
                        vineyardName = {this.state.wine.vineyard.fullName}
                        subregion = {this.state.wine.nested_region}
                        vineyardRegion = {this.state.wine.vineyard.region}  
                        vineyardDetails ={this.state.wine.vineyard.longDescription}
                    >
                    </VineyardList>
                    </div>
                    ) : <div>Loading...</div>}
                
            </div>
            </div>
        )
    }
}

export default WineDetails;

