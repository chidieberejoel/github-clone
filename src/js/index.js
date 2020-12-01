import * as navView from "./views/navbar";
import * as userDetails from "./views/userDetails";
import * as repositories from "./views/repo";
import axios from "axios";
import { url, query, token } from "./config";

const fetchedData = axios.create({
  baseURL: url,
  headers: {
    Authorization: `bearer ${token}`,
  },
});

const getResults = async () => {
  const res = await fetchedData.post("", { query: query });
  const resData = res.data.data.viewer;
  navView.signedInAs(resData);
  userDetails.userNames(resData);
  repositories.renderResult(resData.repositories.edges);
};

const showDetails = async () => {
  await getResults();
};

showDetails();
