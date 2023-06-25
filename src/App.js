import "./App.css"

import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import HomeNavbar from "./Pages/HomeNavbar/HomeNavbar";
import Product from "./Pages/Product/Product";
import RestockPage from "./Pages/Restock/RestockPage";
import AddNewProductPage from "./Pages/AddNewProductPage/AddNewProductPage";
import CameraPage from "./Pages/CameraPage/CameraPage";


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom"




const Layout = () => {

  return (
    <div>
      <Outlet/>
      <Footer />
    </div>
  )
}


const HomePageLayout = () => {
  
  return (
    <div>
      <Home/>
    </div>
  )
}

const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      // errorElement: <ErrorPage />,
      children:[
        {
          path:"/",
          element: <HomePageLayout/>
        },
        {
          path:"/restock",
          element:<RestockPage/>
        },
      ]
    },
    {
      path:"/product",
      element:<Product/>
    },
    {
      path:"/add-new-product",
      element:<AddNewProductPage/>
    },
    {
      path:"/camera",
      element:<CameraPage/>
    },
])

function App() {
  return (
    <div className="bg-slate-50">

      <RouterProvider router={router} />
    </div>
  )
}

export default App
