const mongoose = require('mongoose');
const db = require('../models');

// This file deletes the existing users and creates new ones

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/CDCDB', { useNewUrlParser: true }
);

const seedOrder = [
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
    cardholderName: "Brock Dunn",
    cardNumber: " 5123456789012346",
    expMonth: "05",
    expYear: "21",
    securityCode: "100",
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
    cardholderName: "bernd kempe",
    cardNumber: "4987654321098760",
    expMonth: "05",
    expYear: "21",
    securityCode: "100",
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
    cardholderName: "yasemin krug",
    cardNumber: "5123456789012340",
    expMonth: "05",
    expYear: "21",
    securityCode: "100",
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
    cardholderName: "alexis park",
    cardNumber: "5123456789012340",
    expMonth: "05",
    expYear: "21",
    securityCode: "100",
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
    cardholderName: "abigail li",
    cardNumber: "5555555555554440",
    expMonth: "5",
    expYear: "21",
    securityCode: "100",
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
    cardholderName: "alvaro herrera",
    cardNumber: "5555555555554440",
    expMonth: "05",
    expYear: "21",
    securityCode: "100",
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
    cardholderName: "ana leclercq",
    cardNumber: "371449635398431",
    expMonth: "05",
    expYear: "21",
    securityCode: "100",
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
    cardholderName: "aslan van neerven",
    cardNumber: "30569309025904",
    expMonth: "05",
    expYear: "21",
    securityCode: "100",
    purchasedItems: {
      wineName: "Flowers Sonoma Coast Pinot Noir 2017",
      wineQty: "2",
      winePrice: "110.00"
    }
  },

]

//Adding the seed data to the DB. You need to do a node scripts/seedUser.js
const seedAPI = async () => {
  try {
    const isDelete = await db.Orders.remove({})
    if (isDelete) {
      seedOrder.map(order => {
        db.Orders.create(order)
        return order;
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}
seedAPI();
