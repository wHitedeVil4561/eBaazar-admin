// console.log(process.env.REACT_APP_API_BASE_URL);

import axios from "./axios";

export const POST = async (endpoints, payload) => {
  try {
    const res = await axios.post(endpoints, payload);
    return await Promise.resolve(res);
  } catch (err) {
    return await Promise.reject(err);
  }
};

export const GET = async (endpoints, params) => {
  try {
    const res = await axios.get(endpoints, { params });
    return await Promise.resolve(res);
  } catch (err) {
    console.log(err);
    return await Promise.reject(err);
  }
};
