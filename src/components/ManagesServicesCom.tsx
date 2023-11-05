"use client";
import { Card, Image, Pagination, Table, Typography } from "antd";
import type { PaginationProps } from "antd";

import React, { useEffect, useState } from "react";
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
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [singleFood, setSingleFood] = React.useState<IFood | {}>({});
  const [filter, setFilter] = useState({
    page,
    limit: pageSize,
    searchTerm,
  });
  const { data, isLoading, refetch } = useGetServiceQuery(filter);
  useEffect(() => {
    setFilter({
      page,
      limit: pageSize,
      searchTerm,
    });

    refetch();
  }, [searchTerm, page, pageSize]);

  if (isLoading) {
    return <Loading />;
  }
  const allFoods: any = [];
  const handleDelete = async (id: string) => {};
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

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    size
  ) => {
    setPageSize(size);
    setPage(current);
  };
  const onChange: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };

  return (
    <div>
      <div className="flex justify-between py-2">
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
      </div>
      <div className="pb-4 flex justify-end">
        <Pagination
        
          current={page}
          onChange={onChange}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          total={data?.meta?.total}
        />
      </div>

      <Card className="p-3">
        <Table
          scroll={{ x: true }}
          dataSource={data?.data}
          columns={columns}
          pagination={false}
        />
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
