import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import PublicLayout from "./layout/PublicLayout";
import UserlayOut from "./layout/UserlayOut";
import AdminlayOut from "./layout/AdminlayOut"; // Uncomment when ready

// Pages
import HomePage from "./Pages/Visitors/HomePage";
import UserProfile from "./Pages/user/Profile";
// import Dashboard from "./Pages/user/Dashboard";
import Details from "./Pages/user/DetailsPage";
import CategoryPage from "./Pages/user/CategoryPage";
import BookingsPage from "./Pages/user/Bookings";

// Protected Routes
import ProtectedRouteUser from "./components/protectedRoutes/ProtectedRoutesUser";
//import ProtectedRouteAdmin from "./components/protectedRoutes/ProtectedRoutesAdmin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/*User Routes (Protected) */}
        <Route element={<ProtectedRouteUser />}>
          <Route path="user" element={<UserlayOut />}>
            <Route path="details/:id" element={<Details />} />
            <Route path="userP" element={<UserProfile />} />
            <Route index  element={<CategoryPage />} />
            <Route path="bookings" element={<BookingsPage />} />{" "}
          </Route>
        </Route>

        {/*Admin Routes (Future use) */}
        {/* <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin" element={<AdminlayOut />}>
            <Route index element={<AdminDashboard />} />
          </Route>
        </Route> */}

        {/*Fallback */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
