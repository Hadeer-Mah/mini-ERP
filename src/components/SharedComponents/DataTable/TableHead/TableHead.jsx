
export default function TableHead({ tableColumns, className}) {
  let tableHeaders = tableColumns;
  return (
    <thead className={className}>
      <tr>
        {tableHeaders &&
          tableHeaders.map((tableHeader) => {
            return (
              <th key={tableHeader} className={"table-header-data"}>
                {tableHeader}
              </th>
            );
          })}
      </tr>
    </thead>
  );
}
