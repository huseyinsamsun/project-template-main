

import { IoDocument } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdTableRows } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";

// Vision UI Dashboard PRO theme
import colors from "assets/theme/base/colors";

const pageRoutes = [
  {
    name: "Dashboards",
    key: "dashboards",
    icon: <IoHome size="16px" color="white" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        // src/layouts/dashboards/default
        route: "/dashboards/default",
      },
      // src/layouts/dashboards/crm
      { name: "CRM", key: "crm", route: "/dashboards/crm" },
    ],
  },
  
  {
    name: "Users",
    key: "users",
    icon: <IoPeople size="16px" color="white" />,
    // src/layouts/pages/users
    collapse: [
      {
        name: "Reports",
        key: "reports",
        route: "/pages/users/reports",
      },
      {
        name: "New User",
        key: "new-user",
        route: "/pages/users/new-user",
      },
    ],
  },
 
  // {
  //   name: "Profile",
  //   key: "profile",
  //   icon: <IoPerson size="16px" color="white" />,
  //   // src/layouts/pages/profile
  //   collapse: [
      
  //     {
  //       name: "Profile Overview",
  //       key: "profile-overview",
  //       route: "/pages/profile/profile-overview",
  //     },
      
  //     {
  //       name: "Teams",
  //       key: "teams",
  //       route: "/pages/profile/teams",
  //     },
      
  //     {
  //       name: "All Projects",
  //       key: "all-projects",
  //       route: "/pages/profile/all-projects",
  //     },
  //   ],
  // },
  
  {
    name: "Extra",
    key: "extra",
    icon: <FaGlobe size="16px" color="white" />,
    collapse: [
      {
        name: "Pricing Page",
        key: "pricing-page",
        // src/layouts/pages/pricing-page
        route: "/pages/pricing-page",
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl" },
      // src/layouts/pages/widgets
      { name: "Widgets", key: "widgets", route: "/pages/widgets" },
      // src/layouts/pages/charts
      { name: "Charts", key: "charts", route: "/pages/charts" },
      {
        name: "Alerts",
        key: "alerts",
        // src/layouts/pages/alerts
        route: "/pages/alerts",
      },
    ],
  },
 
  {
    name: "Account",
    key: "account",
    icon: <IoBuild size="16px" color="white" />,
    // src/layouts/pages/account
    collapse: [
      {
        name: "Settings",
        key: "settings",
        route: "/pages/account/settings",
      },
      {
        name: "Billing",
        key: "billing",
        route: "/pages/account/billing",
      },
      {
        name: "Invoice",
        key: "invoice",
        route: "/pages/account/invoice",
      },
    ],
  },
 
  {
    name: "Projects",
    key: "projects",
    icon: <IoDocument size="16px" color="white" />,
    // src/layouts/pages/projects
    collapse: [
      {
        name: "General",
        key: "general",
        route: "/pages/projects/general",
      },
      {
        name: "Timeline",
        key: "timeline",
        route: "/pages/projects/timeline",
      },
    ],
  },

  {
    name: "Orders",
    key: "orders",
    icon: <IoStatsChart size="16px" color="white" />,
    collapse: [
      {
        name: "Order List",
        key: "order-list",
        // src/layouts/ecommerce/orders/order-list
        route: "/ecommerce/orders/order-list",
      },
      {
        name: "Order Details",
        key: "order-details",
        // src/layouts/ecommerce/orders/order-details
        route: "/ecommerce/orders/order-details",
      },
    ],
  },

  {
    name: "General",
    key: "general",
    icon: <IoDocuments size="16px" color="white" />,
    // src/layouts/ecommerce
    collapse: [
      {
        name: "Overview",
        key: "overview",
        route: "/ecommerce/overview",
      },
      {
        name: "Referral",
        key: "referral",
        route: "/ecommerce/referral",
      },
    ],
  },
  {
    name: "Products",
    key: "products",
    icon: <FaShoppingCart size="16px" color="white" />,
    collapse: [
      {
        name: "New Product",
        key: "new-product",
        // src/layouts/ecommerce/products/new-product
        route: "/ecommerce/products/new-product",
      },
      {
        name: "Edit Product",
        key: "edit-product",
        // src/layouts/ecommerce/products/edit-product
        route: "/ecommerce/products/edit-product",
      },
      {
        name: "Product Page",
        key: "product-page",
        // src/layouts/ecommerce/products/product-page
        route: "/ecommerce/products/product-page",
      },
    ],
  },
  {
    name: "Sign In",
    key: "sign-in",
    icon: <IoHome size="16px" color="white" />,
    // src/layouts/authentication/sign-in
    collapse: [
      {
        name: "Basic",
        key: "basic",
        // src/layouts/authentication/sign-in/basic
        route: "/authentication/sign-in/basic",
      },
      // {
      //   name: "Cover",
      //   key: "cover",
      //   route: "/authentication/sign-in/cover",
      // },
      // {
      //   name: "Illustration",
      //   key: "illustration",
      //   route: "/authentication/sign-in/illustration",
      // },
    ],
  },
  {
    name: "Sign Up",
    key: "sign-up",
    icon: <IoHome size="16px" color="white" />,
    // src/layouts/authentication/sign-up
    collapse: [
      {
        name: "Basic",
        key: "basic",
        route: "/authentication/sign-up/basic",
      },
 
    ],
  },
  {
    name: "Applications",
    key: "applications",
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        // src/layouts/applications/kanban
        icon: <MdSpaceDashboard size="16px" color={colors.info.main} />,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        // src/layouts/applications/wizard
        icon: <RiProfileLine size="16px" color={colors.info.main} />,
      },
      {
        name: "Data Tables",
        key: "data-tables",
        // src/layouts/applications/data-tables
        route: "/applications/data-tables",
        icon: <MdTableRows size="16px" color={colors.info.main} />,
      },
      {
        name: "Calendar",
        key: "calendar",
        // src/layouts/applications/calendar
        route: "/applications/calendar",
        icon: <FaCalendarAlt size="16px" color={colors.info.main} />,
      },
    ],
  },
];

export default pageRoutes;
