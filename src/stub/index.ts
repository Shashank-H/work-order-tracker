import { createServer } from 'miragejs';

import { data, updateData } from '../constants/data';


createServer({

  routes() {
    this.namespace = "api"

    this.get("/work-orders", (schema) => {
      return JSON.parse(data);
    })

    this.post("/work-orders", (schema,req) => {
      console.log(req.requestBody);
      
      let d = JSON.parse(data)
      let newItem=JSON.parse(req.requestBody);

      newItem.order_id = d.orders.length;
      newItem.upload_date = Date.now();
      d.orders.push(newItem)
      updateData(JSON.stringify(d));
      console.log({d});
      return d;
    })
  },
})

export {}