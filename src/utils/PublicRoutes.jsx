import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router";

export default function PublicRoutes(){
    const auth = useSelector((state)=>state.auth)
    return auth.user ? <Navigate to="/"/> : <Outlet/>
}