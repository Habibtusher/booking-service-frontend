import { Button, Form, Image, Input, Modal, Select, Upload } from "antd";
import React, { useEffect } from "react";
type AddEditModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  foodId?: string | null;
  status: string;
};
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { message } from "@/helpers/toast/toastHelper";
import {
  useAddServiceMutation,
  useSingleServiceGetQuery,
} from "@/redux/api/features/services/serviceApi";
import { useGetCategoryQuery } from "@/redux/api/features/category/categoryApi";
const AddEditModal: React.FC<AddEditModalProps> = ({
  showModal,
  setShowModal,
  foodId,
  status,
}) => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [logoPreview, setLogoPreview] = React.useState<
    string | undefined | null
  >();
  const [loading, setLoading] = React.useState(false);
  const [singleData, setSingleData] = React.useState(false);
  const [addService] = useAddServiceMutation();
  if (foodId) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data } = useSingleServiceGetQuery(foodId);
    setSingleData(data);
  }
  console.log(singleData);
  const { data } = useGetCategoryQuery(undefined);

  const onFinish = async (values: any) => {
    const value = {
      name: values.name,
      category: values.category,
      image: logoPreview,
      price: values.price,
      description: values.description,
    };
    const res = await addService(value);

    if (res.data?.success === true) {
      message.success(res.data?.message);
    }
    setLogoPreview("");

    form.resetFields();
    setShowModal(false);
  };

  useEffect(() => {
    // if (singleData) {
    //   form.setFieldsValue({
    //     name: singleData?.data?.name,
    //     category: singleData.data?.category,
    //     price: singleData.data?.price,
    //     discription: singleData?.data?.discription,
    //   });
    //   setLogoPreview(singleData?.data?.image);
    // }
  }, [singleData, form]);
  const uploadImage = async (options: any) => {
    setLoading(true);
    const { file } = options;
    console.log(file);
    const imageData = new FormData();
    imageData.set("key", "ac8d9f66a12ed78ebde2e2558428a077");
    imageData.append("image", file);
    try {
      const { data } = await axios.post(
        "https://api.imgbb.com/1/upload",
        imageData
      );
      if (data.success === true) {
        setLogoPreview(data.data.display_url);
        setLoading(false);
      }
      console.log(data.data.display_url);
    } catch (error) {
      console.log(error);
    }
  };
  // const deleteProfileImage = () => {
  //   setLogoPreview(null);
  // };
  return (
    <div>
      <Modal
        title="Add Food"
        style={{
          top: 20,
        }}
        visible={showModal}
        onCancel={() => {
          // setLogoPreview()
          form.resetFields();
          setShowModal(false);
        }}
        footer={null}
      >
        <div className="flex items-center mt-6">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            customRequest={uploadImage}
          >
            {logoPreview ? (
              <Image
                src={logoPreview ? logoPreview : ""}
                alt="avatar"
                style={{ width: "65px", objectFit: "cover" }}
              />
            ) : (
              <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Add</div>
              </div>
            )}
          </Upload>

          {/* <Button
            style={{
             
              borderRadius: "5px",
            }}
            icon={
              <DeleteOutlined
                style={{ fontSize: "20px", color: "red" }}
                onClick={() => deleteProfileImage()}
              />
            }
          ></Button> */}
        </div>
        <Form
          className="mt-2"
          layout="vertical"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input name",
              },
            ]}
          >
            <Input placeholder="name.." className="p-2" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[
              {
                required: true,
                message: "Please input your last name",
              },
            ]}
          >
            <Select defaultValue={null}>
              <Option value={null}>Select</Option>
              {data?.data.map((value: any, i: any) => (
                <Option key={i} value={value?._id}>
                  {value?.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              {
                required: true,
                message: "Please input price",
              },
            ]}
          >
            <Input placeholder="price.." className="p-2" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please input description",
              },
            ]}
          >
            <TextArea placeholder="description" allowClear />
          </Form.Item>

          <div style={{ textAlign: "right" }}>
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => {
                // setLogoPreview()
                form.resetFields();
                setShowModal(false);
              }}
            >
              {" "}
              Cancel
            </Button>

            <Button
              style={{
                backgroundColor: "#4A6CD1",
                color: "#FFFFFF",
                borderRadius: "5px",
              }}
              htmlType="submit"
              className="w-24 h-24"
            >
              {status === "edit" ? "Update" : "Add"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddEditModal;
