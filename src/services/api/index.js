import axios from "axios";
import moment from "moment-timezone";
import { BASE_URL } from "../../constants/path";
import { TOKEN_ID } from "../../constants/token";

export const setHeader = async (contentType) => {
  const headers = {
    "Content-Type": contentType || "application/json; charset=utf-8",
    "X-Timezone-Offset": moment.tz.guess(),
    tokenCybersoft: TOKEN_ID,
  };
  
  return headers;
};

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;

export const getData = async ({ url, responseType, params }) =>
  instance({
    method: "get",
    headers: await setHeader(),
    url,
    params,
    responseType,
  });

export const postData = async ({ url, responseType, contentType, data }) =>
  instance({
    method: "post",
    headers: await setHeader(contentType),
    url,
    data,
    responseType,
  });

export const putData = async ({ url, responseType, contentType, data }) =>
  instance({
    method: "put",
    headers: await setHeader(contentType),
    url,
    data,
    responseType,
  });

export const deleteData = async ({ url }) =>
  instance({
    method: "delete",
    headers: await setHeader(),
    url,
  });

export const patchData = async ({ url, responseType, data }) =>
  instance({
    method: "patch",
    headers: await setHeader(),
    url,
    data,
    responseType,
  });
