import { HomePage } from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotPage/NotFound";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ProductPage from "../pages/ProductPage/ProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
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
        path: '/signin',
        page: SignInPage,
        // isShowHeader: true,
    },
    {
        path: '/signup',
        page: SignUpPage,
        // isShowHeader: true,
    },
    {
        path: '/product-detail',
        page: ProductDetail,
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