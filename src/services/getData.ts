import { data } from "../constants/data";
import { Order } from "../constants/types";

function getOrders(): Promise<Array<Order>> {

  return new Promise((resolve, reject) => {
    let allOrders: Array<Order> = JSON.parse(data);
    setTimeout(() => {
      resolve(allOrders)
    }, 1000)
  });

}

export { getOrders }