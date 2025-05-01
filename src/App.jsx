import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact"; 
import Layout from "./Layout"; // Correct import of Layout
import SpecificService from "./ServicesComponents/SpecificService/SpecificService";
import BookingPage from "./Pages/Booking/BookingPage";
import Package from "./Pages/Package/Package";
import Appointments from "./Pages/Appointments/Appointments";
import AppointmentDetails from "./Pages/Appointments/AppointmentDetails/AppointmentDetails";
// import SpaServices from "./Pages/SpaServices/SpaServices";
import Postpartum from "./Pages/SpaServices/SpecificServices/PostPartum/PostPartum";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import LoginPage from "./Components/LoginPage/LoginPage";
import UsersPage from "./Pages/UsersPage/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all pages
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "package", element: <Package /> },
      { path: "services/:id", element: <SpecificService /> },
      { path: "services/postpartum", element: <Postpartum /> },
      { path: "contact", element: <Contact /> },
      { path: "book", element: <BookingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "users", element: <UsersPage /> },  // <--- new
      { path: "reports", element: <div>Reports Page Coming Soon</div> },
      { path: "settings", element: <div>Settings Page Coming Soon</div> },
      { path: "profile", element: <div>Profile Page Coming Soon</div> },
      { path: "appointments", element: <ProtectedRoute component={<Appointments />} /> },
      { path: "appointments/:id", element: <ProtectedRoute component={<AppointmentDetails />} /> }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
