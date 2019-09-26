const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  media_type_id: String,
  base_url: String,
  public_id: String,
  height: Number,
  width: Number,
  alt_text: String
});


const vineyardSchema = new Schema({
  fullName: String,
  longDescription: String,
  region: String,
  imageUrl: String,
  geoLat: Number,
  geoLong: Number
});


const wineSchema = new Schema({
  name: String,
  region: String,
  color: String,
  nested_region: String,
  varietal: String,
  alcohol_percent: Number,
  vintage: Number,
  price: Number,
  vineyard: vineyardSchema,
  stock: Number,
  shortDescription: String,
  longDescription: String,
  pictures: [pictureSchema],
  volume: Number
});

wineSchema.index({
  name: "text",
  nested_region: "text",
  longDescription: "text",
  shortDescription: "text"
});

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
