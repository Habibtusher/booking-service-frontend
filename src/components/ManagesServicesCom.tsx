"use client";
import {Image, Pagination, Table, Typography } from "antd";
import type { PaginationProps } from "antd";

import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddEditModal from "./modal/AddEditModal";

import FoodSearch from "./InputSearch";
import { useGetServiceQuery } from "@/redux/api/features/services/serviceApi";
import Loading from "@/app/loading";
const ManagesServicesCom = () => {
  const [status, setStatus] = React.useState("add");

  const [showModal, setShowModal] = React.useState(false);

  const [foodId, setFoodId] = React.useState<string | null>(null);
  
  const [searchTerm, setSearchTerm] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
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
  
    setStatus("edit");
    setFoodId(id);
    setShowModal(true);
  };
  const columns = [
    {
      title: <Typography className="dashboard-table-header">Image</Typography>,
      dataIndex: "name",
      key: "name",

      render: (_: any, record: any) => {
        return (
          <Image style={{ height: "40px", width: "40px" }} src={record.image} />
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
      render: (_: any, record: any) => {
        return <div className="">${record?.price}</div>;
      }
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
          className="py-3 w-40 bg-[#4A6CD1] mt-10 border-2 border-white rounded-md font-medium cursor-pointer text-white"
        >
          {" "}
          Add New
        </button>

        <FoodSearch onSearch={handleSearch} />
      </div>
      <div className="pb-5 flex justify-end">
        <Pagination
          current={page}
          onChange={onChange}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          total={data?.meta?.total}
        />
      </div>

        <Table
          scroll={{ x: true }}
          dataSource={data?.data}
          columns={columns}
          pagination={false}
        />
     

      {showModal && (
        <AddEditModal
          showModal={showModal}
          setShowModal={setShowModal}
          status={status}
          foodId={foodId}
        />
      )}
    </div>
  );
};

export default ManagesServicesCom;
