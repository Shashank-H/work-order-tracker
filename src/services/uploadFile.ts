import axios from 'axios';

import { Order } from '../constants/types';

function uploadWorkOrder(workOrder:any,progressTracker:(p:any) => void): Promise<Array<Order>> {

  return axios.post("/api/work-orders", workOrder, {
    onUploadProgress: progressTracker,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res)=>res.data)
  .catch((err)=>{
    console.log(err);
  })

}

export { uploadWorkOrder }