import React from "react";

export default function Row({ coin, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td className="info">
        <span>
          <img src={coin.image} alt={coin.symbol}></img>
        </span>
        <h1>{coin.name}</h1>
        <p>{coin.symbol}</p>
      </td>
      <td>{'$' + coin.current_price + ' usd'}</td>
      {coin.price_change_percentage_24h < 0 ? (
        <td style={{ color: 'red' }}>{coin.price_change_percentage_24h}</td>
      ) : (
        <td>{coin.price_change_percentage_24h}</td>
      )}
      <td>{coin.total_volume}</td>
    </tr>
  );
}
