import "./App.css";
import { Listar } from "./components/Listar/Listar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Agregar } from "./components/Agregar/Agregar";
import { Editar } from "./components/Editar/Editar";

function App() {
    return (
        <Router>
        <Switch>
          <Route path="/edit/:id">
            <Editar />
          </Route>
          <Route path="/add">
            <Agregar />
          </Route>
          <Route path="/products">
            <Listar />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
}

export default App;
