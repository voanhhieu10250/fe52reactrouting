import AboutPage from "../containers/HomeTemplate/Aboutpage";
import HomePage from "../containers/HomeTemplate/Homepage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import DetailPage from "../containers/HomeTemplate/DetailPage";
import HocPage from "../containers/HomeTemplate/HocPage";
import DashbroadPage from "../containers/AdminTemplate/DashboardPage";
import UserPage from "../containers/AdminTemplate/UserPage";
import HooksPage from "../containers/HomeTemplate/HooksPage";
import MaterialPage from "../containers/HomeTemplate/MaterialPage";
import React from "react";

const routesHome = [
  {
    exact: true,
    path: "/",
    // component: HomePage,
    component: React.lazy(() => import("../containers/HomeTemplate/Homepage")),
  },
  {
    exact: false,
    path: "/about",
    // component: AboutPage,
    component: React.lazy(() => import("../containers/HomeTemplate/Aboutpage")),
  },
  {
    exact: false,
    path: "/list-movie",
    // component: ListMoviePage,
    component: React.lazy(() =>
      import("../containers/HomeTemplate/ListMoviePage")
    ),
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/hoc",
    component: HocPage,
  },
  {
    exact: false,
    path: "/hooks",
    component: HooksPage,
  },
  {
    exact: false,
    path: "/material",
    component: MaterialPage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashbroad",
    component: DashbroadPage,
  },
  {
    exact: false,
    path: "/user",
    component: UserPage,
  },
];

export { routesHome, routesAdmin };
