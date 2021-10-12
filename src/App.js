import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import AuthProvider from "./Context/AuthProvider";

function App() {
  document.title = "Simple firebase authentication";

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
