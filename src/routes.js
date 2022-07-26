import Landing from "./pages/landing"
import OrderPage from "./pages/order"

const routes = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/order',
    element: <OrderPage />
  }
]

export default routes;
