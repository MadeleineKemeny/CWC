const mongoose = require('mongoose');
const db = require('../models');

// This file deletes the existing users and creates new ones

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/CDCDB', { useNewUrlParser: true }
);

const seedOrders = [
  {
    email: "brooke.dunn@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "Brock",
    lastName: "Dunn",
    address1: "284 small st",
    city: "Happyland",
    state: "Arkansas",
    zipCode: "57429",
    purchasedItems: {
      wineName: "Screaming Eagle Cabernet Sauvignon 2004",
      wineQty: "1",
      winePrice: "3299.97"
    }
  },
  {
    email: "bernd.kempe@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "bernd",
    lastName: "kempe",
    address1: "poststra√üe 154",
    city: "Springfield",
    state: "Arkansas",
    zipCode: "57428",
    purchasedItems: {
      wineName: "Silver Oak Alexander Valley Cabernet Sauvignon 2014",
      wineQty: "5",
      winePrice: "400"
    }
  },
  {
    email: "yasemin.krug@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "yasemin",
    lastName: "krug",
    address1: "birkenstra√üe 188",
    city: "Do Stop",
    state: "Arkansas",
    zipCode: "28574",
    purchasedItems: {
      wineName: "Parducci Small Lot Pinot Noir 2017",
      wineQty: "1",
      winePrice: "18"
    }
  },
  {
    email: "alexis.park@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "alexis",
    lastName: "park",
    address1: "3529 tecumseh rd",
    city: "Sweet Lips",
    state: "Arkansas",
    zipCode: "29250",
    purchasedItems: {
      wineName: "Aymus Special Selection Cabernet Sauvignon 2015",
      wineQty: "1",
      winePrice: "179.99"
    }
  },
  {
    email: "abigail.li@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "abigail",
    lastName: "li",
    address1: "6016 grand ave",
    city: "Fairbanks",
    state: "California",
    zipCode: "28750",
    purchasedItems: {
      wineName: "Silver Oak Alexander Valley Cabernet Sauvignon 2014",
      wineQty: "05",
      winePrice: "400"
    }
  },
  {
    email: "alvaro.herrera@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "alvaro",
    lastName: "herrera",
    address1: "6998 calle del barquillo",
    city: "Sandwich",
    state: "California",
    zipCode: "28575",
    purchasedItems: {
      wineName: "Flowers Sonoma Coast Pinot Noir 2017",
      wineQty: "1",
      winePrice: "55.00"
    }
  },
  {
    email: "ana.leclercq@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "ana",
    lastName: "leclercq",
    address1: "4121 rue baraban",
    city: "Fame",
    state: "California",
    zipCode: "28572",
    purchasedItems: {
      wineName: "Flowers Sonoma Coast Pinot Noir 2017",
      wineQty: "1",
      winePrice: "55.00"
    }
  },
  {
    email: "aslan.vanneerven@example.com",
    password: "Test1234",
    userType: "User",
    firstName: "aslan",
    lastName: "van neerven",
    address1: "3500 sterrenburg",
    city: "Toad Suck",
    state: "California",
    zipCode: "85742",
    purchasedItems: {
      wineName: "Flowers Sonoma Coast Pinot Noir 2017",
      wineQty: "2",
      winePrice: "110.00"
    }
  },

]

//Adding the seed data to the DB. You need to do a node scripts/seedUser.js
db.Orders
  .deleteMany({})
  .then(() => db.Orders.collection.insertMany(seedOrders))
  .then(data => {
    console.log(data.result.n + " Order records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  })

