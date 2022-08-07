import React, { useEffect } from 'react';
import styled from 'styled-components';

import { PageHeading, PageMainRow } from '../../components/AppCommon';
import { AppLinkButton } from '../../components/AppLinkButton';
import { Page } from '../../components/Page';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { loadAllOrders, selectOrders } from '../../state/orderSlice';
import OrderTable from './components/OrderTable';


const Count = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`

const OrderPage:React.FC<any>  = ({}) => {

  const orders = useAppSelector(selectOrders);
  const dispatch = useAppDispatch()
  

  useEffect(()=>{
    orders.length===0&&
    dispatch(loadAllOrders())
  },[])



  useEffect(()=>{
    console.log("order updated",{orders});
  },[orders])


  return(
    <Page>

      <PageMainRow>
        <PageHeading>Work Orders</PageHeading>
        <Count>Count : {orders.length}</Count>
        <AppLinkButton to="add-order">
          Upload Work Order
        </AppLinkButton>
      </PageMainRow>

      <OrderTable data-testid="table-container" data={orders} />
    </Page>
  )
} 

export default React.memo(OrderPage)