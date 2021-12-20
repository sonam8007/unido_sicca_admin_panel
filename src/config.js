import axios from "axios";
import { getToken } from "Utils/Common";

let token = getToken();
if(token == null){
  token = localStorage.getItem('token');
}
  console.log("token:",token)
  const instance = axios.create({
    baseURL: 'http://34.123.181.183/api/admin',
    // baseURL:'http://localhost:4400/api/admin',
    // timeout: 10000,
    headers: {'Authorization': token}
  });

  export default instance;
