import "./App.css";
import Table from "./components/Table";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getCoins = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div className="App">
      <h1>Crypto Prices App</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Table coins={coins} search={search} />
    </div>
  );
}

export default App;
