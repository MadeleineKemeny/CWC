import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import WineCard from "../components/Card";
import VineyardList from "../components/VineyardList";

class WineDetailsModal extends Component {
  render() {
    return (
      <div>
        {this.props.wine ? (
          <Modal
            show={this.props.showModal}
            size="lg"
            onHide={this.props.hideModal}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {" "}
                <h3 className="modalTitle">
                  More information about your selection
                </h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <WineCard
                picture={
                  this.props.wine.pictures[0].base_url +
                  this.props.wine.pictures[0].public_id
                }
                name={this.props.wine.name}
                varietal={this.props.wine.varietal}
                shortDescription={
                  this.props.wine.longDescription ||
                  this.props.wine.shortDescription
                }
                volume={this.props.wine.volume}
                price={this.props.wine.price}
                onAddToCart={() => this.props.onAddToCart}
              />

              {/* Vineyard information */}
              <VineyardList
                vineyardName={this.props.wine.vineyard.fullName}
                subregion={this.props.wine.nested_region}
                vineyardRegion={this.props.wine.vineyard.region}
                vineyardDetails={this.props.wine.vineyard.longDescription}
              />
            </Modal.Body>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default WineDetailsModal;
