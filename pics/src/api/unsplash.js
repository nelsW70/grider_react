import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a77a1c695f63091419d51f54337f953c22e875009e310f6cb748fc40b5d2b7d8"
  }
});
