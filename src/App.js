import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import Layout from "./Layout";
import Admin from "./pages/Admin/AdminComponent";
import Home from "./pages/Home/HomeComponent";
import AdminFunctional from "./pages/Admin2/AdminFunctionalComponent";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Layout>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/admin" component={Admin}></Route>
                            <Route
                                path="/adminFunctional"
                                component={AdminFunctional}
                            ></Route>
                        </Layout>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
