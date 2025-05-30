import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<ProductPage />} />
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='/cart' element={<CartPage />}/>
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {return <RouterProvider router={router} />}


export default App
