import axios from "axios";

const KEY = "AIzaSyDjuuVVMxHX3gHyiTZM9igrDAotygzLZjU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
