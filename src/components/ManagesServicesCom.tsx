"use client"
import { Button, Card, Input, Table, Typography } from 'antd';
import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';
import AddEditModal from './modal/AddEditModal';
const ManagesServicesCom = () => {
    const [searchValue, setQuickSearchValue] =React.useState("");
    const [status, setStatus] =React.useState("add");
    const [showModal, setShowModal] =React.useState(false);
    const [singleFood, setSingleFood] =React.useState({});
 const getAllFood = () => {

 }
    const { Search } = Input;
    const allFoods:any = []
    const handleDelete = async (id:string) => {
        // setSelectId(id);
        // setDeleteModal(true);
      };
      const handleEdit = (id:string) => {
        // const editFood = allFoods.find((e) => e._id === id);
        // setStatus("edit");
        // setSingleFood(editFood);
        // setShowModal(true);
      };
      const columns = [
        {
          title: <Typography className="dashboard-table-header">Image</Typography>,
          dataIndex: "name",
          key: "name",
        //   filteredValue: [searchValue],
        //   onFilter: (value, record) => {
        //     return String(record.name)
        //       .toLocaleLowerCase()
        //       .includes(value.toLocaleLowerCase());
        //   },
        //   render: (_, record) => {
        //     return <Image className="dashboard-allfood-img" src={record.image} />;
        //   },
        },
        {
          title: <Typography className="dashboard-table-header">Name</Typography>,
          dataIndex: "name",
          key: "name",
          render: (_:any, record:any) => {
            return (
              <div className="d-flex align-items-center">
                <Typography>{record.name}</Typography>
              </div>
            );
          },
        },
        {
          title: (
            <Typography className="dashboard-table-header">Category</Typography>
          ),
          dataIndex: "category",
          key: "category",
        },
        {
          title: <Typography className="dashboard-table-header">Price</Typography>,
          dataIndex: "price",
          key: "price",
        },
        {
          title: (
            <Typography className="dashboard-table-header">
              Discount Price
            </Typography>
          ),
          dataIndex: "discountPrice",
          key: "discountPrice",
        },
        {
          title: (
            <Typography className="dashboard-table-header">
              Discount Percent
            </Typography>
          ),
          dataIndex: "discountPercent",
          key: "discountPercent",
          render: (_:any, record:any) => {
            return <Typography>{record.discountPercent} %</Typography>;
          },
        },
        {
          title: <Typography className="dashboard-table-header">Action</Typography>,
          dataIndex: "action",
          key: "action",
          render: (_:any, record:any) => {
            return (
              <div className="d-flex align-items-center all-food">
                <EditOutlined 
                  onClick={() => handleEdit(record._id)}
                  className="edit-icon"
                />
              <DeleteOutlined 
                  onClick={() => handleDelete(record._id)}
                  className="delete-icon"
                />
              </div>
            );
          },
        },
      ];
    return (
        <div>
             <div className="flex justify-between py-4">
             <button   onClick={() => {
              setShowModal(true);
              setStatus("add");
            }} className="btn btn-wide"> Add New</button>
         

          <div className="mb-2 text-right">
            <Search
              enterButton="Search"
             
              placeholder="search"
              onChange={(e) => {
                setQuickSearchValue(e.target.value);
              }}
              onSearch={(value) => {
                setQuickSearchValue(value);
              }}
              style={{
                background: 'linear-gradient(to right, #ff0000, #00ff00)',
                borderColor: 'transparent',
                color: 'white',
              }}
            />
          </div>
        </div>
            <Card className='p-3'>
            <Table scroll={{ x: true }} dataSource={allFoods} columns={columns} />
            </Card>

            <AddEditModal 
            getAllFood={getAllFood}
            showModal={showModal}
            setShowModal={setShowModal}
            status={status}
            singleFood={singleFood}
            
            />
        </div>
    );
};

export default ManagesServicesCom;