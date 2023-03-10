import { Navigate, Outlet } from "react-router";

const useAuth = () => {
    const user = { loggedIn : false}
    const token = localStorage.getItem('token')
    if (token) {
        user.loggedIn = true
    }
    return user.loggedIn
}

const PrivateRoute = () => {
    const isAuth = useAuth();
    console.log(isAuth);
    return (
        isAuth ? <Outlet/>:<Navigate to ='login'/>
    )
}

export default PrivateRoute;