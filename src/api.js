import axios from "axios";

var URL = "";

URL = "http://localhost:8080";

export default axios.create({
    baseURL: URL,
})