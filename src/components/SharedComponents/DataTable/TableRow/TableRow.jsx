export default function TableRow({ tableRow, tableColumns }) {
    let columns = tableColumns;
  
    return (
      <tr
        className={"table-row"}
      >
        {tableRow &&
          columns.map((dataCell, i) => {
            let cellKey = columns[i];
            return (
              <td
                className={"table-data-cell"}
                key={`${cellKey}-${i}`}
                onClick={(e) => {
                  ( dataCell == "Actions" || dataCell == "" ) && e.stopPropagation();
                }}
              >
                {tableRow[dataCell]}
              </td>
            );
          })}
      </tr>
    );
  }
  