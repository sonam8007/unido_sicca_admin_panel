import axios from "axios";
import { getToken } from "Utils/Common";
let token = localStorage.getItem('token');
if(token == null){
  token = getToken();
}
const instance = axios.create({
    baseURL: 'http://35.202.59.196/api/admin',
    // timeout: 10000,
    headers: {'Authorization': token}
  });

  export default instance;