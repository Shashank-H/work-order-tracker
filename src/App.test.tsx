import { act, render } from "@testing-library/react";
import axios from "axios";
import App from "./App";
import { getOrders } from "./services/getData";
import { uploadWorkOrder } from "./services/uploadFile";
import "./stub";

global.matchMedia =global.matchMedia ||function () {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

describe("Populates App with correct data", () => {
  it("Must Render DataTable with correct data", async () => {
    let app = render(<App />);

    let data:any = (await act(() =>
      axios.get("/api/work-orders").then((res) => res.data)
    ));

    let filenameDOM = app?.getAllByTestId("doc-name") || [];
    filenameDOM.forEach((ob, index) => {
      expect(ob.textContent).toEqual(data.orders[index].filename);
    });
  });
});

describe("Testing API Calls", () => {
  let currentOrderLength = 0;

  it("Response must contain orders array", async () => {
    let orders = await getOrders();
    currentOrderLength = orders.length;
    expect(orders).toBeDefined();
  });

  it("Must Upload a file and create new order and also track the progress", async () => {
    let workOrder = {
      filename: "testfile.pdf",
      file: "",
    };
    let trackerFn = jest.fn();
    await uploadWorkOrder(workOrder, trackerFn);

    expect(trackerFn).toBeCalled();
    let orders = await getOrders();

    expect(orders).toHaveLength(currentOrderLength + 1);
  });
});
