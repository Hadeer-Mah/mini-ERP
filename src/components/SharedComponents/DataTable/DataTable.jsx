import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";
import "./DataTable.scss"

export default function DataTable({
  tableRows = [],
  tableColumns = [],
  mapKey,
  className ="table-head"
}) {
  return (
    tableRows?.length > 0 && (
      <>
        <table className="table" cellSpacing="0">
          <TableHead
            tableColumns={tableColumns}
            className={className}
          />
          <tbody className="table-body">
            {tableRows &&
              tableRows.map((tableRow) => {
                return (
                  <TableRow
                    key={tableRow[mapKey]}
                    tableRow={tableRow}
                    tableColumns={tableColumns}
                  />
                );
              })}
          </tbody>
        </table>
      </>
    )
  );
}
