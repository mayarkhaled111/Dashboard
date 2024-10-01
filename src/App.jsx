import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Admins from "./component/Admins";
import Products from "./component/Products";
import Sales from "./component/Sales";
import Market from "./component/Market";

function App() {
  let routes = createHashRouter([{
    path:'/',element:<Layout></Layout>,children:[
      {index:true,element: <Home></Home>},
      {path:'/admins',element: <Admins></Admins>},
      {path:'/products',element: <Products></Products>},
      {path:'/sales',element: <Sales></Sales>},
      {path:'/market',element: <Market></Market>},
    ]
  }])

 

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>

  );
}

export default App;
