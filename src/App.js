import './App.css';
import CircleProgress from './components/CircleProgress'

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <CircleProgress percentage={65} text={'safety'}/>
          </div>
          <div class="col-3">
            <CircleProgress percentage={77} text={'health'}/>
          </div>
          <div class="col-3">
            <CircleProgress percentage={33} text={'Environmental Friendly'}/>
          </div>
          <div class="col-3">
            <CircleProgress percentage={26} text={'Daily Task'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
