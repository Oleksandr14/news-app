import { Outlet } from "react-router-dom"
import { Suspense } from "react"

import Header from "../Header/Header"
import Loader from "../Loader/Loader"

const SharedLayout: React.FC = () => {
    return (
        <>

        <Header/>
            
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
        
        </>
    );
};

export default SharedLayout