import axios from "axios";
import { url, query, token } from "../config";

export default class User {
  constructor() {
    this.fetchedData = axios.create({
      baseURL: url,
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  }

  async testAPI() {
    try {
      const res = this.fetchedData.post("", { query: query });
      this.result = res;
      console.log(this.result);
    } catch (err) {
      console.log(err);
    }
  }
}
