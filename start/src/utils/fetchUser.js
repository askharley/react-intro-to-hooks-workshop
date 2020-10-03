import axios from "axios";

export default function fetchUser(userId) {
  return axios.get(
    `https://my-json-server.typicode.com/askharley/nintendo-power-json-api/users/${userId}`
  );
}
