import { Order } from "../constants/types";

interface OrderData {
  order: Omit<Order,"order_id">;
  uploadData: any;
}

export default async function generateOrderItem(file:File): Promise<OrderData> {

  let form = new FormData()
  form.append("file",file,file.name);
  
  let order :Omit<Order,"order_id">= {
    filename: file.name,
    upload_date: Date.now(),
  }

  let fileBase64 = await getBase64(file);

  return {
    order: order,
    uploadData: {
      filename: file.name,
      file: fileBase64,
    }
  }
}

function getBase64(file:File) : Promise<string | ArrayBuffer | null> {

  return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result)
    };
    reader.onerror = function (error) {
      reject(error);
    };
  })
}
