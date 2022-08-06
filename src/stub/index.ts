import { createServer } from 'miragejs';

import { data, updateData } from '../constants/data';


createServer({

  routes() {
    this.namespace = "api"

    this.get("/work-orders", (schema) => {
      let orders = JSON.parse(data).orders.map(({filename, upload_date, order_id}:any) => ({filename,upload_date,order_id}));
      
      return {orders};
    })

    this.post("/work-orders", (schema,req) => {
      let d = JSON.parse(data)
      let newItem=JSON.parse(req.requestBody);

      newItem.order_id = d.orders.length;
      newItem.upload_date = Date.now();
      d.orders.push(newItem)
      updateData(JSON.stringify(d));

      const orders = d.orders.map(({filename, upload_date, order_id}:any) => ({filename,upload_date,order_id}));

      return {orders};
    })
  },
})

export {}