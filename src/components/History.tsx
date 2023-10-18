"use client"
import { Card, Table, Typography } from 'antd';
import React from 'react';

const OrderHistory = () => {
    const [orders, setOrders] = React.useState([])
    function formatDate(date:Date):string {
        var d = new Date(date),
          month = "" + (d.getMonth() + 1),
          day = "" + d.getDate(),
          year = d.getFullYear();
    
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
    
        return [day, month, year].join("-");
      }
    const columns = [
        {
          title: (
            <Typography className="dashboard-table-header text-center">
              Items
            </Typography>
          ),
          dataIndex: "name",
          key: "name",
          render: (_:any, record:any) => {
            return (
              <Typography
                // onClick={() => {
                //   handleViewDetails(record._id);
                // }}
                className="items-detail text-center"
              >
                View Items
              </Typography>
            );
          },
        },
        {
          title: (
            <Typography className="dashboard-table-header text-center">
              Payment Status
            </Typography>
          ),
          dataIndex: "paymentStatus",
          key: "paymentStatus",
          render: (_:any, record:any) => {
            return (
              <div className="d-flex align-items-center justify-content-center">
                <Typography>{record.paymentStatus}</Typography>
              </div>
            );
          },
        },
        {
          title: (
            <Typography className="dashboard-table-header text-center">
              Total Price
            </Typography>
          ),
          dataIndex: "totalAmount",
          key: "totalAmount",
          render: (_:any, record:any) => {
            return (
              <div className="d-flex align-items-center justify-content-center">
                <Typography>৳{record.totalAmount}</Typography>
              </div>
            );
          },
        },
        {
          title: (
            <Typography className="dashboard-table-header text-center">
              Status
            </Typography>
          ),
          dataIndex: "discountPrice",
          key: "discountPrice",
          render: (_:any, record:any) => {
            return (
              <div className="d-flex align-items-center justify-content-center">
                <Typography>{record.status}</Typography>
              </div>
            );
          },
        },
        {
          title: (
            <Typography className="dashboard-table-header text-center">
              Date
            </Typography>
          ),
          dataIndex: "date",
          key: "date",
          render: (_:any, record:any) => {
            return (
              <Typography className="d-flex align-items-center justify-content-center">
                {" "}
                {formatDate(record.date)}
              </Typography>
            );
          },
        },
      ];
    return (
        <div>
             <Card className="p-3">
                
                  <Table
                    scroll={{ x: true }}
                    dataSource={orders}
                    columns={columns}
                  />
                </Card>
        </div>
    );
};

export default OrderHistory;