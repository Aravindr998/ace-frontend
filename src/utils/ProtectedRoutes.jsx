import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router";

export default function ProtectedRoutes(){
    const auth = useSelector((state) => state.auth)
    return auth ? <Outlet/> : <Navigate to="/login"/>
}