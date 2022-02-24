import axios from "axios";
import { getToken } from "Utils/Common";

let token = getToken();
if(token == null){
  token = localStorage.getItem('token');
}
  console.log("token:",token)
  const instance = axios.create({
    baseURL: 'http://35.202.59.196/api/admin',
    // baseURL:'http://localhost:4400/api/admin',
    // timeout: 10000,
    headers: {'Authorization': token}
  });

  export default instance;
