import { Navigate, Outlet } from "react-router";

const useAuth = () => {
    const user = { loggedIn : false }
    const token = localStorage.getItem('token')
    if (token) {
        user.loggedIn = true
    }
    return user.loggedIn
}

const AuthGuard = () => {
    const isAuth = useAuth();
    console.log(isAuth);
    return (
        isAuth ? <Navigate to ={-1} /> : <Outlet/>
    )
}

export default AuthGuard;