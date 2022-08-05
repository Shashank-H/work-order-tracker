import { Progress, Table } from 'antd';
import Column from 'antd/lib/table/Column';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Order, OrderItem } from '../../../constants/types';
import { useAppSelector } from '../../../state/hooks';
import { selectProgress } from '../../../state/orderSlice';

import type { ColumnsType } from "antd/es/table";
interface TableItemProps {
  center?: boolean;
}

const TableItem = styled.div<TableItemProps>`
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  flex: 1;
  ${({center})=>{
    
    return center?`
      justify-content: center;
      align-items: center;
    `:``;
  }}
  /* background-color: red; */
  /* text-align: center; */
`;

const TableItemLink = styled(Link)`
  
`

const PercentageRenderer = (order_id: number) => {
  
  
}


const tableCols: ColumnsType<OrderItem> = [
  {
    title: "Document Name",
    className: 'table-head',
    align:'center',
    dataIndex: "filename",
    render: (value: string) => <TableItem >{value}</TableItem>,
  },
  {
    title: "Upload Date",
    className: 'table-head',
    align:'center',
    dataIndex: "upload_date",
    render: (msDate) => (
      <TableItem center>{new Date(msDate).toDateString().split(' ').splice(1).join(' ')}</TableItem>
    ),
  },
  // {
  //   title: "Upload Status",
  //   className: 'table-head',
  //   align:'center',
  //   dataIndex: "order_id",
  //   render: PercentageRenderer
  // },
  {
    title: "Actions",
    className: 'table-head',
    align:'center',
    dataIndex: "order_id",
    render: (id:number) => (
      <TableItem center>{<TableItemLink to={`view-order/${id}`} >View Work Order {`>>`} </TableItemLink>}</TableItem>
    ),
  }
];

interface OrderTableProps {
  data: Array<Order>;
}

export const OrderTable: React.FC<OrderTableProps> = ({ data }) => {

  const progress = useAppSelector(selectProgress)

  const renderCurrentFileProgress= useMemo(()=>{
    return (order_id:number)=>{
      let curProgress = progress.find((p)=>p.order_id===order_id)?.progress||100
      return (
        <TableItem center>
          <span style={{marginRight:7}}>{curProgress}%</span>  <Progress percent={curProgress} strokeColor={"#5BC69F"} showInfo={false} />
        </TableItem>
      )
    };
  },[progress])

  const renderDocName = (value: string) => <TableItem >{value}</TableItem>

  const renderUploadDate = (msDate:number) => (
    <TableItem center>{new Date(msDate).toDateString().split(' ').splice(1).join(' ')}</TableItem>
  )

  const renderActions = (id:number) => (
    <TableItem center>{<TableItemLink to={`view-order/${id}`} >View Work Order {`>>`} </TableItemLink>}</TableItem>
  )


  return (
    <Table
      dataSource={data}
      // columns={tableCols}
      rowKey={"order_id"}
      pagination={false}
      rowSelection={{ type: "checkbox" }}
    >
      <Column
        title={"Document Name"}
        dataIndex={"filename"}
        align="center"
        className="table-head"
        render={renderDocName}
      />
      <Column
        title={"Upload Date"}
        dataIndex={"upload_date"}
        align="center"
        className="table-head"
        render={renderUploadDate}
      />
      <Column
        title={"Upload Status"}
        dataIndex="order_id"
        align="center"
        className="table-head"
        render={renderCurrentFileProgress}
      />
      <Column
        title={"Actions"}
        dataIndex={"order_id"}
        align="center"
        className="table-head"
        render={renderActions}
      />
    </Table>
  );
};


