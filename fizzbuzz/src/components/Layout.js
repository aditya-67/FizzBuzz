import React from "react";
import fizzbuzz from "fizzbuzz-module";
import "./Layout.css";

function Layout({ number }) {
  const columnLimit = 10;
  const rowLimit = ~~(number / columnLimit);

  const createTable = () => {
    let body = [];
    for (let i = 0; i < rowLimit; i++) {
      let columns = [];
      for (let j = 0; j < columnLimit; j++) {
        columns.push(
          <td className={fizzbuzz(i * 10 + j + 1)}>
            {fizzbuzz(i * 10 + j + 1)}
          </td>
        );
      }
      body.push(<tr>{columns}</tr>);
    }

    return body;
  };

  return (
    <table>
      <tbody>{createTable()}</tbody>
    </table>
  );
}

export default Layout;
