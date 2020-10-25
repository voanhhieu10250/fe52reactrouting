import AboutPage from "../containers/HomeTemplate/Aboutpage";
import HomePage from "../containers/HomeTemplate/Homepage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";

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
];

export { routesHome };
