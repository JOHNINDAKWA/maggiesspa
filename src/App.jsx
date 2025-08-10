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
import Postpartum from "./Pages/SpaServices/SpecificServices/PostPartum/PostPartum";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import LoginPage from "./Components/LoginPage/LoginPage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import Pricing from "./Pages/Pricing/Pricing";
import ArticlesPage from "./Pages/Articles/ArticlesPage";
import ArticleDetailPage from "./Pages/Articles/ArticleDetailPage";
import BackendLayout from "./Components/BackendLayout/BackendLayout";
import Inquiries from "./Pages/Inquiries/Inquiries";
import GoogleReviews from "./Pages/GoogleReviews/GoogleReviews";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This is your public-facing layout
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "package", element: <Package /> },
      { path: "services/:id", element: <SpecificService /> },
      { path: "services/postpartum", element: <Postpartum /> },
      { path: "contact", element: <Contact /> },
      { path: "book", element: <BookingPage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: "articles/:articleId", element: <ArticleDetailPage /> },
      // The login page is a standalone page without any layout
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/dashboard", // New parent route for all backend pages
    element: <ProtectedRoute component={<BackendLayout />} />,
    children: [
      { index: true, element: <Appointments /> }, // Appointments as the default dashboard page
      { path: "users", element: <UsersPage /> },
      { path: "pricing", element: <Pricing /> },
      { path: "inquiries", element: <Inquiries /> },
      { path: "reviews", element: <GoogleReviews /> },
      { path: "reports", element: <div>Reports Page Coming Soon</div> },
      { path: "settings", element: <div>Settings Page Coming Soon</div> },
      { path: "profile", element: <div>Profile Page Coming Soon</div> },
      { path: "backend-services", element: <div>Profile Page Coming Soon</div> },
      { path: "appointments", element: <Appointments /> },
      { path: "appointments/:id", element: <AppointmentDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;