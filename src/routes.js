import Dashboard from "views/Dashboard.js";
import Users from "views/Users.js";
import Alerts from "views/Alerts.js";
import DeviceManagement from "views/DeviceManagement.js";
import Support from "views/Support.js";
import AccessControl from "views/AccessControl.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    iconClass: "left-menu-icon",
    icon: require("assets/icons/Dashboard.svg"),
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    iconClass: "left-menu-icon",
    icon: require("assets/icons/Users icon.svg"),
    component: Users,
    layout: "/admin"
  },
  {
    path:"/alerts",
    name:"Alerts",
    iconClass:"left-menu-icon",
    icon:require("assets/icons/Alerts icon.svg"),
    component: Alerts,
    layout:"/admin"
  },
  {
    path:"/devicemanagement",
    name:"Device Management",
    iconClass:"left-menu-icon",
    icon:require("assets/icons/Device Management.svg"),
    component: DeviceManagement,
    layout:"/admin"
  },
  {
    path:"/support",
    name:"Support",
    iconClass:"left-menu-icon",
    icon:require("assets/icons/Support.svg"),
    component: Support,
    layout:"/admin"
  },
  {
    path:"/accesscontrol",
    name:"Access Control",
    iconClass:"left-menu-icon",
    icon:require("assets/icons/Access Icon.svg"),
    component: AccessControl,
    layout:"/admin"
  },
  // {
  //   path:"/soilmoisture",
  //   name:"Soil Moisture",
  //   iconClass:"left-menu-icon",
  //   icon:require("assets/icons/line-chart.svg"),
  //   component: SoilMoisture,
  //   layout:"/admin"
  // },
  // {
  //   path:"/individual",
  //   name:"",
  //   iconClass:"",
  //   component: Individual,
  //   layout:"/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   iconClass: "left-menu-icon",
  //   icon: require("assets/icons/Dashboard.svg"),
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   iconClass: "left-menu-icon",
  //   icon: require("assets/icons/Dashboard.svg"),
  //   component: TableList,
  //   layout: "/admin"
  // }
];
export default routes;
