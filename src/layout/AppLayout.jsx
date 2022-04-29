import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"

const AppLayout = () => {
    return <div style={{
        padding: '50px 70px 0px 300px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
