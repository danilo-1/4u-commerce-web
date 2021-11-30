import axios from "axios";

var URL = "";

/* URL = "http://localhost:8080"; */
URL = "https://api-4ucommerce.herokuapp.com/index.html";

export default axios.create({
    baseURL: URL,
})