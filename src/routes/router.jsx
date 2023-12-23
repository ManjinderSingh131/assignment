import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../error-page";
import { routePaths } from "../route-paths";
import { Layout } from "../Layout/Layout";
import { Home } from "../components/Home/Home";
import { Orders } from "../components/Orders/Orders";
import { OrderDetails } from "../components/OrderDetails/OrderDetails";
import TrackOrders from "../components/TrackOrdersPage/TrackOrders";
import WalletPage from "../components/WalletPage/WalletPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index path={routePaths.HOME} element={<Home />} />
      <Route path={routePaths.ORDERS}>
        <Route path={routePaths.ORDERS} element={<Orders />} />
        <Route path={":orderId"} element={<OrderDetails />} />
      </Route>
      <Route path={routePaths.TRACK} element={<TrackOrders />} />
      <Route path={routePaths.WALLET} element={<WalletPage />} />
    </Route>
  )
);
