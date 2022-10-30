import { auth } from "./services/auth.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    user == null ?
      <h1 className='text-primary text-center m-5'>Please Login</h1>
     : 
    <div></div>
  );
}

export default App;
