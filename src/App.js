import { auth } from "./services/auth.js";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Simulation from "./components/Simulation";
import Actions from "./pages/Actions";

import Quiz from "./components/Quiz";
import Rewards from "./pages/Rewards";
import Home from "./components/Home.js";
function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Navbar />
      {user ?
      <Switch>
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/simulation" component={Simulation} />
        <Route exact path="/actions" component={Actions} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/rewards" component={Rewards} />
        <Redirect to="/profile" />
      </Switch> : 
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Redirect to="/home" />
      </Switch>}
    </div>
  );
}

export default App;
