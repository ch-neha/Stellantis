import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard";
import Profile from "./pages/Profile";
import Simulation from "./components/Simulation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/simulation" component={Simulation} />
        <Redirect to="/profile" />
      </Switch>

      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
