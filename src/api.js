import axios from "axios";

var URL = "";

/* URL = "http://localhost:8080"; */
URL = "http://api-4ucommerce.herokuapp.com";

export default axios.create({
    baseURL: URL,
})