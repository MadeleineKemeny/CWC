const db = require("../models");

function getWinesFilter(req) {
  var dbFilter = {};

  // req.query contains all the query string parameters;
  if (req.query.color)
    dbFilter.color = req.query.color;
  if (req.query.region)
    dbFilter.nested_region = req.query.region;
  if (req.query.varietal)
    dbFilter.varietal = req.query.varietal;
  if (req.query.price) {
    switch (req.query.price) {
      case "low":
        dbFilter.price = { $lt: 25 };
        break;
      case "medium":
        dbFilter.price = { $gte: 25, $lt: 50 };
        break;
      case "high":
        dbFilter.price = { $gt: 50 };
        break;
    }
  }
  if (req.query.textQuery)
    dbFilter.$text = { $search: req.query.textQuery };

  return dbFilter;
}


// Defining methods for the winesController
module.exports = {

  findAll: function(req, res) {
    var filter = getWinesFilter(req);

    db.Wine
      .find(filter)
      .limit(25)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Wine
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findRegions: function(req, res) {
    var filter = getWinesFilter(req);

    db.Wine
      .aggregate([
        { $match: filter }, 
        { $group: {_id: "$nested_region", count: { $sum: 1 } } }, 
        { $sort: { count: -1 } } 
      ])
      .then(regions => res.json(regions))
      .catch(err => res.status(500).json(err));
  },

  findVarietals: function(req, res) {
    var filter = getWinesFilter(req);

    db.Wine
      .aggregate([
        { $match: filter }, 
        { $group: {_id: "$varietal", count: { $sum: 1 } } }, 
        { $sort: { count: -1 } } 
      ])
      .then(varietals => res.json(varietals))
      .catch(err => res.status(500).json(err));
  }

};
