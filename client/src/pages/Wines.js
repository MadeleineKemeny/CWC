import React from "react";
import API from "../utils/API";
import WineCard from "../components/Card";
import WineDetailsModal from "./WineDetailsModal";
import "./style.css"

class Wines extends React.Component {

    state = {
        wines: [],      // List of wines displayed in search results
        regions: [],    // List of regions displayed in dropdown
        varietals: [],  // List of varietals displayed in dropdown

        color: "",      // User's color choice
        region: "",     // User's region choice
        varietal: "",   // User's varietal choice
        price: "",      // User's price choice (high/medium/low)
        textQuery: "",  // User's search terms

        showModal: false,
        selectedWine: null
    };

    componentDidMount() {
        this.loadWines();
    }

    loadWines = () => {
        var filter = {};
        if (this.state.color)
            filter.color = this.state.color;
        if (this.state.region)
            filter.region = this.state.region;
        if (this.state.varietal)
            filter.varietal = this.state.varietal;
        if (this.state.price)
            filter.price = this.state.price;
        if (this.state.textQuery)
            filter.textQuery = this.state.textQuery;

        API.getWines(filter)
          .then(res => this.setState({ wines: res.data }) )
          .catch(err => console.log(err));

        API.getWineRegions(filter)
            .then(res => this.setState({ regions: res.data }))
            .catch(err => console.log(err));

        API.getWineVarietals(filter)
            .then(res => this.setState({ varietals: res.data }))
            .catch(err => console.log(err));
      };

    handleColorChange = (event) => {
        var colorValue = event.target.value;
        this.setState({ color: colorValue }, () => this.loadWines());
    };

    handleRegionChange = (event) => {
        var regionValue = event.target.value;
        this.setState({ region: regionValue }, () => this.loadWines());
    }
    
    handleVarietalChange = (event) => {
        var varietalValue = event.target.value;
        this.setState({ varietal: varietalValue }, () => this.loadWines());
    }

    handlePriceChange = (event) => {
        var priceValue = event.target.value;
        this.setState({ price: priceValue }, () => this.loadWines());
    }

    handleTextQueryChange = (event) => {
        var textQueryValue = event.target.value;
        this.setState({ textQuery: textQueryValue });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.loadWines();
    }

    handleClearAll = (event) => {
        this.setState({
            color: "",
            region: "",
            varietal: "",
            price: "",
            textQuery: ""
        }, () => this.loadWines());
    }

    onViewDetails = (wine) => {
        this.setState({ 
            showModal: true,
            selectedWine: wine
        });
    }

    handleHideModal = () => {
        this.setState({
            showModal: false,
            selectedWine: null
        });
    }
    
    render() {
        return (
            <div>

                <form onSubmit={this.handleFormSubmit} className="wineFilterForm">

                    {/* Color selector */}
                    <select value={this.state.color} onChange={this.handleColorChange}>
                        <option value="">Color</option>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                        <option value="rose">Rosé</option>
                        <option value="sparkling">Sparkling</option>
                    </select>

                    {/* Region selector */}
                    <select value={this.state.region} onChange={this.handleRegionChange}>
                        <option value="">Region</option>
                        {this.state.regions.map(region => (
                            <option key={region._id} value={region._id}>{region._id} ({region.count})</option>
                        ))}
                    </select>

                    {/* Varietal selector */}
                    <select value={this.state.varietal} onChange={this.handleVarietalChange}>
                        <option value="">Varietal</option>
                        {this.state.varietals.map(varietal => (
                            <option key={varietal._id} value={varietal._id}>{varietal._id} ({varietal.count})</option>
                        ))}
                    </select>

                    {/* Price selector */}
                    <select value={this.state.price} onChange={this.handlePriceChange}>
                        <option value="">Price Range</option>
                        <option value="low">Under $25</option>
                        <option value="medium">$25-$50</option>
                        <option value="high">Above $50</option>
                    </select>

                    <input type="search" placeholder="Search" value={this.state.textQuery} onChange={this.handleTextQueryChange} />

                    <button>Go</button>

                    <button type="button" className="btn-browse" onClick={this.handleClearAll}>Clear all filters</button>

                </form>
                <hr />

                <div className="scroll" id="wineResultsContainer">
                {this.state.wines.length > 0 ?
                    this.state.wines.map((wine) => (
                        <WineCard
                            key = {wine._id}
                            id = {wine._id}
                            picture = {wine.pictures[0].base_url + wine.pictures[0].public_id}
                            name = {wine.name}
                            varietal = {wine.varietal}
                            shortDescription = {wine.shortDescription}
                            volume = {wine.volume}
                            price = {wine.price}
                            onAddToCart = {() => this.props.onAddToCart(wine)}
                            onViewDetails = {() => this.onViewDetails(wine)}
                        >                                
                        </WineCard>
                    ))
                : <div>No wines available</div>}
                <WineDetailsModal 
                    showModal={this.state.showModal} 
                    hideModal={this.handleHideModal} 
                    wine={this.state.selectedWine} 
                    onAddToCart = {() => this.props.onAddToCart(this.state.selectedWine)}
                />
            </div>

            </div>
        );
    }

}

export default Wines;


