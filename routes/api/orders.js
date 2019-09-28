const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

router.route("/")
    .post(ordersController.create);

module.exports = router;
