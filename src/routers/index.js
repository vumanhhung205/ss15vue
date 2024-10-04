import { createRouter, createWebHistory } from "vue-router";
import ProductDetail from "@/view/ProductDetail.vue";
import Profile from "@/view/Profile.vue";
import Bai1 from "@/components/Bai1.vue";
import Bai2 from "@/components/Bai2.vue";
import Bai3 from "@/components/Bai3.vue";
import Bai4 from "@/components/bai4.vue";
import BAi5 from "@/components/BAi5.vue";
import Product from "@/view/Product.vue";

// Định nghĩa các route
const routes = [
  {
    path: "/",
    name: "home",
    component: Bai1,
  },
  {
    path: "/contact",
    name: "contact",
    component: Bai2,
  },
  {
    path: "/register",
    name: "register",
    component: Bai3,
  },
  {
    path: "/login",
    name: "login",
    component: Bai4,
  },
  {
    path: "/:pathMatch(.*)*",  // Đường dẫn không hợp lệ
    name: "NotFound",
    component: BAi5, 
  },
    {
        path: "/detail",
        name: "detail",
        component: ProductDetail,
    },
    {
        path: "/product",
        name: "product",
        component: Product,
    },
    {
        path: "/profile/:name",
        name: "profile",
        component: Profile,
    },
    // {
    //     path: "/product",
    //     name: "product",
    //     children: [
    //         {
    //             path: "/detail",
    //             name: "product-detail",
    //             component: ProductDetail,
    //         },
    //         {
    //             path: "/review",
    //             name: "product-review",
    //             component: ProductDetail,
    //         },
    //     ]
    // }
];


// tạo cơ chế định nghĩa tuyến cho ứng dụng
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
