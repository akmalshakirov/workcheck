import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Preloader from "./components/ui/Preloader/Preloader";
import { useAuth } from "./hooks/useAuth";

const DashboardLayout = React.lazy(() => import("./layout/DashboardLayout"));
const DashboardAdmins = React.lazy(() =>
    import("./pages/Dashboard/DashboardAdmins")
);
const DashboardWorkers = React.lazy(() =>
    import("./pages/Dashboard/DashboardWorkers")
);
const DashboardProfile = React.lazy(() =>
    import("./pages/Dashboard/DashboardProfile")
);
const DashboardHome = React.lazy(() =>
    import("./pages/Dashboard/DashboardHome")
);
const Login = React.lazy(() => import("./pages/Login/Login"));

const App = () => {
    const { logedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (logedIn && window.location.pathname === "/login") {
            navigate("/", { replace: true });
        }
    }, [logedIn, navigate]);

    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route
                    path='/'
                    element={
                        <PrivateRoute>
                            <DashboardLayout />
                        </PrivateRoute>
                    }>
                    <Route path='/' element={<DashboardHome />} />
                    <Route path='admins' element={<DashboardAdmins />} />
                    <Route path='workers' element={<DashboardWorkers />} />
                    <Route path='profile' element={<DashboardProfile />} />
                    <Route path='*' element={<h1>Page Not Found</h1>} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
