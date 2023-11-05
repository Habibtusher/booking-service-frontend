"use client";
import { Card, Image, Table, Typography } from "antd";
import React, { useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddEditModal from "./modal/AddEditModal";
import { getBaseUrl } from "@/helpers/config/envConfig";
import axios from "axios";
import { IFood } from "@/constants/common";
import FoodSearch from "./InputSearch";
import { useGetServiceQuery } from "@/redux/api/features/services/serviceApi";
import Loading from "@/app/loading";
const ManagesServicesCom = () => {

  const [status, setStatus] = React.useState("add");
  const [showModal, setShowModal] = React.useState(false);
  const [singleFood, setSingleFood] = React.useState<IFood | {}>({});

  const { data, isLoading } = useGetServiceQuery({ limit: 10, page: 1 });
 
  if (isLoading) {
    return <Loading />;
  }
  const allFoods: any = [];
  const handleDelete = async (id: string) => {

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
        return (
          <Image style={{ height: "50px", width: "50px" }} src={record.image} />
        );
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
        return <div className="">{record?.category?.name}</div>;
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

  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm);
  };
  return (
    <div>
      <div className="flex justify-between py-4">
        <button
          onClick={() => {
            setShowModal(true);
            setStatus("add");
          }}
          className="btn btn-wide"
        >
          {" "}
          Add New
        </button>

        <FoodSearch onSearch={handleSearch} />
        {/* <div className="mb-2 text-right">
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
              background: "linear-gradient(to right, #ff0000, #00ff00)",
              borderColor: "transparent",
              color: "white",
            }}
          />
        </div> */}
      </div>
      <Card className="p-3">
        <Table scroll={{ x: true }} dataSource={data?.data} columns={columns} />
      </Card>
      {showModal && (
        <AddEditModal
         
          showModal={showModal}
          setShowModal={setShowModal}
          status={status}
          singleFood={singleFood}
        />
      )}
    </div>
  );
};

export default ManagesServicesCom;
