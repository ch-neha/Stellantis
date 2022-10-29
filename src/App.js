import logo from "./logo.svg";
import "./App.css";
import { signInWithGoogle, auth, signOut } from "./services/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { checkIfExistingUSerElseAddUser } from "./services/user";
function App() {
  const [user] = useAuthState(auth);
  if (user) checkIfExistingUSerElseAddUser(user);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {user ? (
          <div>
            {user.email}
            <button onClick={signOut}>Logout</button>
          </div>
        ) : (
          <button onClick={signInWithGoogle}>Login with Google</button>
        )}
      </header>
    </div>
  );
}

export default App;
