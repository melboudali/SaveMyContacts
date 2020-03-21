import axios from "axios";

const SetAuthToken = token => {
  token
    ? (axios.defaults.headers.common["x-auth-token"] = token)
    : delete axios.defaults.headers.common["x-auth-token"];
};

export default SetAuthToken;
