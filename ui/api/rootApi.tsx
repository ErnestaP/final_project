export const a = "a"
// import axios from "axios";

// // Why 127.0.0.1? bug in Node.js https://github.com/node-fetch/node-fetch/issues/1624
// // https://github.com/node-fetch/node-fetch/issues/1624
// // This would be since localhost resolves to ::1 which is the "equivalent" of 127.0.0.1 but in IPv6 instead of IPv4. Since the server seems to be listening only on IPv4 this means that the connection will be refused when trying ::1.
// const api = axios.create({
//   withCredentials: false,
//   baseURL: `http://0.0.0.0:8000`,
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
//   },
// });

// export function getApiRoot() {
//   return api;
// }