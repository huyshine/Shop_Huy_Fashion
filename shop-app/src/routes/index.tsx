import { HomePage } from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotPage/NotFound";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";



export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/products',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFound,

    },
]