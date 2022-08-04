let data = `{
  "orders": [
    {
      "order_id": 198309128309,
      "filename": "hello.pdf",
      "upload_date": 31237378,
      "file": ""
    },
    {
      "order_id": 198309128309,
      "filename": "test.pdf",
      "upload_date": 31237378,
      "file": ""
    },
    {
      "order_id": 198309128309,
      "filename": "try.pdf",
      "upload_date": 31237378,
      "file": ""
    }
  ]
}`

function updateData(newData: string){
  data = newData;
}

export {data, updateData} 