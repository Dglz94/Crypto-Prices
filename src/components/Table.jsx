import React from "react";
import Row from "./Row";

export default function Table({ coins, search }) {
  const titles = [
    { title: "#", att: "" },
    { title: "Name", att: "name" },
    { title: "Price", att: "current_price" },
    { title: "Price Change", att: "price_change_prercentage_24h" },
    { title: "24h Volume", att: "total_volume" },
  ];

  let filterCoinsBySearch = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          {titles.map((title) => (
            <th>{title.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filterCoinsBySearch.map((coin, index) => {
          return <Row coin={coin} index={index} key={index + 1} />;
        })}
      </tbody>
    </table>
  );
}
