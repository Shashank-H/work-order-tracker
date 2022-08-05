import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

import { Order, OrderItem, ProgressMetadata } from '../constants/types';
import { getOrders } from '../services/getData';
import { AppThunk, RootState } from './store';



interface OrderData{
  data:Array<Order>;
  uploadMetadata: Array<ProgressMetadata>;
}

export const orderSlice : Slice<OrderData> = createSlice({
  name: "orders",
  initialState: {
    data: new Array<Order>(),
    uploadMetadata: new Array<ProgressMetadata>(),
  },
  reducers:{
    addOrder: (state,action: PayloadAction<Omit<Order,"order_id">>) => {
      
      state.data = [...state.data,{...action.payload, order_id: state.data.length}]
    },
    loadOrders: (state, action: PayloadAction<Array<Order>>)=>{
      
      state.data = action.payload
    },
    updateProgress: (state, action: PayloadAction<{order_id:number,progress:number}>)=>{
      let updateProgressIndex = state.uploadMetadata.findIndex((item)=>item.order_id===action.payload.order_id)
      if(updateProgressIndex>=0){
        state.uploadMetadata[updateProgressIndex] = action.payload;
      }else{
        state.uploadMetadata.push(action.payload)
      }
    }
    // selectOrder: (state,action: PayloadAction<number>)=>{
    //   let itemToSelect = state.data.findIndex((o)=>o.order_id === action.payload)
    //   state.data[itemToSelect].isSelected = true;
    // }

  },
})

export const selectOrders = (state:RootState) => state.orders.data
export const selectProgress = (state:RootState) => state.orders.uploadMetadata

export const { addOrder, loadOrders, updateProgress } = orderSlice.actions

export const loadAllOrders = (): AppThunk => (dispatch,getState) =>{
  getOrders().then((ordrs)=>{
    let allOrdrs = ordrs.map((o):OrderItem=>({...o,progress:100}));
    dispatch(loadOrders(allOrdrs));
  })
  return "load/order";
};