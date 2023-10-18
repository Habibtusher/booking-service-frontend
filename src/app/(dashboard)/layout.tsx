import Sidebar from '@/components/Sidebar';
import SidebarCom from '@/components/Sidebar';

import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
        <Sidebar>{ children }</Sidebar>
      </div>
    );
};

export default DashboardLayout;