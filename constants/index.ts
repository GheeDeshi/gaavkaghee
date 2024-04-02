import { Contact, Gift, Image, LayoutDashboard, List, ShoppingBag, ShoppingBasket, UsersRound } from "lucide-react";

export const sidebarLinks = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: UsersRound,
    },
    {
        name: "Products",
        path: "/admin/products",
        icon: ShoppingBag,
    },
    {
        name: "Orders",
        path: "/admin/orders",
        icon: ShoppingBasket,
    },
    {
        name: "Categories",
        path: "/admin/categories",
        icon: List,
    },
    {
        name: "Banners",
        path: "/admin/banners",
        icon: Image,
    },
    {
        name: "Contacts",
        path: "/admin/contacts",
        icon: Contact,
    },
    {
        name: "Coupouns",
        path: "/admin/coupouns",
        icon: Gift,
    }
]