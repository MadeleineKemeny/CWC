const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemsSchema = new Schema({
    wineName: String,
    wineQty: String,
    winePrice: String
})

const orderSchema = new Schema({
   purchasedItems: [cartItemsSchema],
   firstName: String,
   lastName: String,
   address1: String,
   address2: String,
   city: String,   
   state: String,
   zipCode: String
});

const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;