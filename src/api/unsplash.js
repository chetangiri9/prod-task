import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e8cc914b4c79786417620055e178fac1e6718b25969153ca26eff281e953add4"
  }
});
