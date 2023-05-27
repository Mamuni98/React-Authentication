import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./components/store/auth-context";

function App() {
  const authCntxt = useContext(AuthContext);
  const LoggedIn = authCntxt.IsLoggedIn;
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!LoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {LoggedIn ? <UserProfile /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
