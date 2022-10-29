import "./App.css";
import Coupons from "./components/Coupons";
import Badge from "./components/Badge/Badge";
function App() {
  const data = [
    {
      type: 1,
      name: "10 Days on road",
    },
    {
      type: 2,
      name: "25 days on road",
    },
    {
      type: 3,
      name: "50 days on road",
    },
    {
      type: 4,
      name: "100 days on road",
    },
    {
      type: 5,
      name: "More than 100 days on road",
    },
  ];
  return (
    <div className="App">
      <Coupons />
      <Badge data={data} />
    </div>
  );
}

export default App;
