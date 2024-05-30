import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav";
import Home from "../pages/Home";
import Footer from "../components/Footer";


const Mainlayout = () => {
    return (
        <div>
            <div className='h-16'>
                <NavBar></NavBar>
            </div>
            <div className='min-h-[calc(100vh-117px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;