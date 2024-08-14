import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-9787a.cloudfunctions.net/api",
  //"http://127.0.0.1:5001/clone-9787a/us-central1/api",
});

export default instance;
