"use client"
import { Button, Card, Image, Input, Table, Typography } from 'antd';
import React, { useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import AddEditModal from './modal/AddEditModal';
import { getBaseUrl } from '@/helpers/config/envConfig';
import axios from 'axios';
import { IFood } from '@/constants/common';
const ManagesServicesCom = () => {
  interface Food {
    _id: string;
    name: string;
    image: string;
    price: number;
  }
  const [searchValue, setQuickSearchValue] = React.useState("");
  const [status, setStatus] = React.useState("add");
  const [showModal, setShowModal] = React.useState(false);
  const [singleFood, setSingleFood] = React.useState<IFood | {}>({});
  const [data, setData] = React.useState([]);

  const { Search } = Input;
  const allFoods: any = []
  const handleDelete = async (id: string) => {
    // setSelectId(id);
    // setDeleteModal(true);
  };
  const handleEdit = (id: string) => {
    const editFood = allFoods.find((e: any) => e._id === id);
    setStatus("edit");
    setSingleFood(editFood);
    setShowModal(true);
  };
  const columns = [
    {
      title: <Typography className="dashboard-table-header">Image</Typography>,
      dataIndex: "name",
      key: "name",

      render: (_: any, record: any) => {
        return <Image style={{ height: "50px", width: "50px" }} src={record.image} />;
      },
    },
    {
      title: <Typography className="dashboard-table-header">Name</Typography>,
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => {
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
      render: (_: any, record: any) => {
        return (
          <div className="">
            {record?.category?.name}
          </div>
        );
      },
    },
    {
      title: <Typography className="dashboard-table-header">Price</Typography>,
      dataIndex: "price",
      key: "price",
    },


    {
      title: <Typography className="dashboard-table-header">Action</Typography>,
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => {
        return (
          <div className="flex gap-3">
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
  const baseUrl = getBaseUrl()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    const res = await axios.get(`${baseUrl}/service`)
    setData(res?.data?.data)

  }
  useEffect(() => {
    getData()
  }, [])
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
        <Table scroll={{ x: true }} dataSource={data} columns={columns} />
      </Card>
{
  showModal &&
   <AddEditModal
        getAllFood={getData}
        showModal={showModal}
        setShowModal={setShowModal}
        status={status}
        singleFood={singleFood}

      />
}
     
    </div>
  );
};

export default ManagesServicesCom;