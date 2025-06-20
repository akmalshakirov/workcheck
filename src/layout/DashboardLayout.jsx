import { LayoutDashboard, ShieldUser, UserCog, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/ui/Header/Header";
import { Sidebar, SidebarItem } from "../components/ui/Sidebar/Sidebar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(
        localStorage.getItem("sidebar") == "true"
    );

    useEffect(() => {
        localStorage.setItem("sidebar", collapsed);
    }, [collapsed]);

    return (
        <div className='dashboard p-2.5 gap-3 bg-[#5f73e2] dark:bg-[#3a3b3b] transition-colors duration-300'>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
                <SidebarItem
                    icon={<LayoutDashboard size={22} />}
                    text='Bosh sahifa'
                    link={"/"}
                />
                <SidebarItem
                    icon={<ShieldUser size={22} />}
                    link={"/admins"}
                    text='Adminlar'
                />
                <SidebarItem
                    icon={<Users size={22} />}
                    text='Ishchilar'
                    link={"/workers"}
                />
                <SidebarItem
                    icon={<UserCog size={22} />}
                    text='Mening profilim'
                    link={"/profile"}
                />
            </Sidebar>
            <div className='flex-1'>
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <main className='p-4 bg-white rounded-lg my-3 dark:bg-black/90 dark:text-white text-black'>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
