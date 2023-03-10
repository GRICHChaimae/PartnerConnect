import {Routes, Route, BrowserRouter} from "react-router-dom"
import Box from '@mui/material/Box';
import Sidenav from "./global/Sidenav";
import PrivateRoute from "./components/ProtectedRoutes/PrivateRoute";
import AuthGuard from "./components/ProtectedRoutes/AuthGuard";
import Home from "./pages/dashboard/Home";
import Mentor from "./pages/dashboard/Mentor";
import Mentee from "./pages/dashboard/Mentee";
import Profile from "./pages/dashboard/Profile";
import About from "./pages/dashboard/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useLocation } from 'react-router-dom';

function SidenavRoutes() {
  const location = useLocation();
  
  if (location.pathname === '/login' || location.pathname === '/register') {
    return (
      <Routes>
        <Route element={<AuthGuard />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    );
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidenav />
      <Routes>
        <Route element={<PrivateRoute />} >
          <Route path="/" exact element={<Home />} />
          <Route path="/mentor" exact element={<Mentor />} />
          <Route path="/mentee" exact element={<Mentee />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/about" exact element={<About />} />
        </Route>
      </Routes>
    </Box>
  );
}


<Routes>
  <Route element={<PrivateRoute />} >
    <Route path="/" element={<Home />}/>
  </Route>
  <Route path="/login" element={<Login />} />
</Routes>


function App() {
  return (
    <BrowserRouter>
      <SidenavRoutes />
    </BrowserRouter>
  );
}

export default App;
 