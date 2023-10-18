import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export const sidebarItems = (role: string) => {

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label:<Link href={`/${role}/profile`}>Profile</Link> ,
      key: "profile",
      icon: <ProfileOutlined />,
     
    },
    {
      label:<Link href={`/${role}/history`}>History</Link> ,
      key: "history",
      icon: <ProfileOutlined />,
     
    },
  ];



//   if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
//   else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
//   else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
//   else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
//   else {
//     return defaultSidebarItems;
//   }

    return defaultSidebarItems;
  
};