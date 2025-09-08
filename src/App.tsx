import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import NeedCookie from "./utils/needCookie";

const App = () => {
  return (
      <RouterProvider router={
        createBrowserRouter(
          createRoutesFromElements(
            <Route path='/' element={<MainLayout />}>
              <Route index element={<ProductPage />} />
              <Route path='/products/:id' element={<NeedCookie><ProductDetail /></NeedCookie>} />
              <Route path='/cart' element={<NeedCookie><CartPage /></NeedCookie>}/> 
              <Route path='/login' element={<LoginPage />}/>
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          )
        )
      } />
    )
}


export default App
