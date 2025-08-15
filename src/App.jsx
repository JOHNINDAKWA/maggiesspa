import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Layout from "./Layout";
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

// 🛒 Cart imports
import { CartProvider } from "./Context/CartContext";
import CartPage from "./Pages/Cart/Cart";
import CheckoutPage from "./Pages/Checkout/Checkout";
import ThankYouPage from "./Pages/ThankYouPage/ThankYouPage";
import BookingPaymentPage from "./Pages/BookingPaymentPage/BookingPaymentPage";
import NotFound from "./Pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Public-facing layout
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
      { path: "login", element: <LoginPage /> },

      // 🛒 New cart route
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "thank-you", element: <ThankYouPage /> },
      { path: "booking-payment", element: <BookingPaymentPage /> },


      { path: "*", element: <NotFound /> }
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute component={<BackendLayout />} />,
    children: [
      { index: true, element: <Appointments /> },
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

      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    // 🛒 Provide cart state to the whole app
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
