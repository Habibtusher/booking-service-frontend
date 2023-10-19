"use client"

import { useGetCategoryQuery } from '@/redux/api/features/category/categoryApi';
import {

  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Card, Table, Typography } from 'antd';
import Search from 'antd/es/input/Search';

import React from 'react';

const ManageCategoryCom = () => {
  const {data,isLoading,error} = useGetCategoryQuery(undefined)

  const [searchValue, setQuickSearchValue] =React.useState("");
  const [status, setStatus] =React.useState("add");
  const [showModal, setShowModal] =React.useState(false);
  const [singleFood, setSingleFood] =React.useState({});
 
  console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const columns = [
    {
      title: <Typography className="dashboard-table-header">Name</Typography>,
      dataIndex: "name",
      key: "name",
  
    },
    {
      title: <Typography className="dashboard-table-header">Action</Typography>,
      dataIndex: "action",
      key: "action",
      render: (_:any, record:any) => {
        return (
          <div className="flex gap-4">
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
  return (
    <div>
      <div className="flex justify-between py-4">
        <button onClick={() => {
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
        <Table scroll={{ x: true }} dataSource={data?.data} columns={columns} />
      </Card>

      {/* <AddEditModal 
     getAllFood={getAllFood}
     showModal={showModal}
     setShowModal={setShowModal}
     status={status}
     singleFood={singleFood}
     
     /> */}
    </div>
  );
};

export default ManageCategoryCom;