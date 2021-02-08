import "./App.css";
import HomePage from "./containers/HomeTemplate/Homepage";
import AboutPage from "./containers/HomeTemplate/Aboutpage";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import NavbarHome from "./components/NavbarHome";
import { routesHome, routesAdmin } from "./routes";
import NavbarAdmin from "./components/NavbarAdmin";
import HomeTemplate from "./containers/HomeTemplate";
import AdminTemplate from "./containers/AdminTemplate";
import AuthPage from "./containers/AdminTemplate/AuthPage";
import React, { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((items, index) => {
        return (
          // <Route
          //   key={index} //mỗi lần duyệt mảng trong react thì cần có key
          //   exact={items.exact}
          //   path={items.path}
          //   component={items.component}
          // />
          <HomeTemplate
            key={index}
            exact={items.exact}
            path={items.path}
            Component={items.component}
          />
        );
      });
    }
  };
  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* Trang Homepage - localhost:3000
          <Route exact path="/" component={HomePage} />

          Trang AboutPage - localhost:3000/about
          <Route path="/about" component={AboutPage} />

          Trang ListMoviePage - localhost:3000/list-movie
          <Route path="/list-movie" component={ListMoviePage} /> */}

          <Suspense fallback={<Loader />}>
            {showLayoutAdmin(routesAdmin)}
            {/* <Route exact={false} path="/auth" component={AuthPage} /> */}
            <Route
              exact={false}
              path="/auth"
              component={React.lazy(() =>
                import("./containers/AdminTemplate/AuthPage")
              )}
            />
            {showLayoutHome(routesHome)}
          </Suspense>
          {/* Trang không tìm thấy - nếu không sài trang này thì thôi, nhưng nếu sài thì phải để cuối cùng! */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
