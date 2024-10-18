export default function TableRow({ tableRow, tableColumns }) {
    let columns = tableColumns;
    let rowClick = tableRow?.rowClick ? tableRow.rowClick : () => {};
    return (
      <tr
        className={"table-row"}
        onClick={() => {
          rowClick();
        }}
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
  