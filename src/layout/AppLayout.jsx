import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"

const AppLayout = () => {
    return <div style={{
        padding: '25px 70px 0px 290px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
