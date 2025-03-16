import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact"; 
import Layout from "./Layout"; // Correct import of Layout
import SpecificService from "./ServicesComponents/SpecificService/SpecificService";
import BookingPage from "./Pages/Booking/BookingPage";
import Package from "./Pages/Package/Package";

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
      { path: "contact", element: <Contact /> },
      { path: "book", element: <BookingPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
