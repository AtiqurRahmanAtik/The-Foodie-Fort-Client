import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";


const Root = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
           
           <div className=" container mx-auto my-9">
           <Outlet></Outlet>
           </div>
           
            <Footer></Footer>


        </div>
    );
};

export default Root;