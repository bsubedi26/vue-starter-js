import Products from '@/pages/products/Products'
import ProductDetails from '@/pages/products/product-details'
import ProductCheckout from '@/pages/products/products-checkout'

const routes = [
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/products/details/:id',
    component: ProductDetails,
    // meta: { requiresAuth: true }
  },
  {
    path: '/products/checkout',
    component: ProductCheckout,
  },
]

export default routes