import LeaderBoard from './pages/Leaderboard';
import './App.css';
import Coupons from './components/Coupons';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <LeaderBoard/>
      <Coupons/>
      <Profile/>
    </div>
  );
}

export default App;
