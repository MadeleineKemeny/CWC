import axios from "axios";

export default {
    saveOrder: function(orderData) {
        return axios.post("/api/orders", orderData);
    }
};