import Navigation from "@/components/Shared/Navigation";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return ( 
        <div>
          <Navigation />
            <Outlet />
        </div>
     );
}

export default MainLayout;