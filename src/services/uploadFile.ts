import { data, updateData } from "../constants/data";
import { Order } from "../constants/types";

function uploadWorkOrder(file:File): Promise<Array<Order>> {
  return new Promise((resolve, reject) => {
    let allOrders: Array<Order> = JSON.parse(data);
    allOrders.push({
      file,
      filename: "file.html",
      order_id: allOrders.length,
      upload_date: Date.now()
    })
    setTimeout(() => {
      updateData(JSON.stringify(allOrders));
      resolve(allOrders)
    }, 1000)
  });

}

export { uploadWorkOrder }