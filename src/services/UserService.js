import baseURL from "../api";

var urlBase = "/users";

class UserService {
    register(name, email, password) {
        return baseURL.get(urlBase + name, email, password);
    }
}

export default new UserService();