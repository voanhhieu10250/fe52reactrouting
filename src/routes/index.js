import AboutPage from "../containers/HomeTemplate/Aboutpage";
import HomePage from "../containers/HomeTemplate/Homepage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import DetailPage from "../containers/HomeTemplate/DetailPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
];

export { routesHome };
