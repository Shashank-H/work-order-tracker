import axios from 'axios';

import { Order } from '../constants/types';

function getOrders(): Promise<Array<Order>> {

  return axios.get("/api/work-orders").then()
  .then(res=>res.data)
  .then((data)=>{
    return data.orders
  }).catch((error)=>{
    console.log("api data err",{error});
  })
}

export { getOrders }