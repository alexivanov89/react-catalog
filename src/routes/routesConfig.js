import DetailProductsPage from '../pages/DetailProductsPage';
import ListProductsPage from '../pages/ListProductsPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: ListProductsPage,
    },
    {
        path: '/item/:itemId',
        exact: true,
        component: DetailProductsPage,
    },
];

export default routesConfig;
