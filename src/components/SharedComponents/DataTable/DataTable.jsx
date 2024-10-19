import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";
import "./DataTable.scss";
import { Pagination } from "rsuite";

export default function DataTable({
  tableRows = [],
  tableColumns = [],
  mapKey,
  className = "table-head",
  itemsCount,
  activePage,
  setActivePage,
}) {
  return (
    tableRows?.length > 0 ? (
      <div className="data-table-container">
        <div className="table-responsive">
          <table className="table w-full" cellSpacing="0">
            <TableHead tableColumns={tableColumns} className={className} />
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
        </div>
        <div className="table-pagination mt-4">
          <Pagination
            prev
            last
            next
            first
            size="xs"
            total={itemsCount}
            limit={2}
            activePage={activePage}
            onChangePage={setActivePage}
            ellipsis={false}
          />
        </div>
      </div>
    ) : <div className="text-center text-xl text-[var(--primary-color)]">No Data Found</div>
  );
}
