import axios from "axios";
import BASE_URL from 'requests.js';

const token = localStorage.getItem('token');

function dashboardFunctions() {
    let dashboardStatus = axios.get(BASE_URL+'/dashboard/status', {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    })
    .then(response => response.data)
    .then( data => { console.log( data ); return data });


  };

//   module.exports = {
//     dashboardStatus
//   };
  export default dashboardFunctions;