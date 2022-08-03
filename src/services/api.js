import axios from "axios";

const URL = "https://api.github.com/users/nederhayden";

const api = axios.create({
  baseURL: URL,
});

export default api;
