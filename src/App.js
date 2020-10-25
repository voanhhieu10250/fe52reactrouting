import "./App.css";
import HomePage from "./containers/HomeTemplate/Homepage";
import AboutPage from "./containers/HomeTemplate/Aboutpage";
import ListMoviePage from "./containers/HomeTemplate/ListMoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import NavbarHome from "./components/NavbarHome";
import { routesHome } from "./routes";
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 1) {
      return routes.map((items, index) => {
        return (
          <Route
            key={index} //mỗi lần duyệt mảng trong react thì cần có key
            exact={items.exact}
            path={items.path}
            component={items.component}
          />
        );
      });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <NavbarHome />
        <Switch>
          {/* Trang Homepage - localhost:3000
          <Route exact path="/" component={HomePage} />

          Trang AboutPage - localhost:3000/about
          <Route path="/about" component={AboutPage} />

          Trang ListMoviePage - localhost:3000/list-movie
          <Route path="/list-movie" component={ListMoviePage} /> */}

          {showLayoutHome(routesHome)}

          {/* Trang không tìm thấy - nếu không sài trang này thì thôi, nhưng nếu sài thì phải để cuối cùng! */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
