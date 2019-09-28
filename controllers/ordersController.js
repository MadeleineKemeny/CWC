const db = require("../order")

module.exports = {
    create: function(req, res) {
        db.Orders
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    }
}