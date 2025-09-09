import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="overflow-hidden rounded-md border border-gray-200 bg-white text-xl"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <header
      role="row"
      columns={columns}
      style={{ gridTemplateColumns: columns }}
      className={`grid items-center gap-x-9 border-b border-b-gray-100 bg-gray-50 px-9 py-6 text-base font-semibold text-gray-600 transition-none`}
    >
      {children}
    </header>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <div
      role="row"
      columns={columns}
      style={{ gridTemplateColumns: columns }}
      className={`grid items-center gap-x-9 px-9 py-4 text-base transition-none not-last:border-b not-last:border-b-gray-100`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return (
      <p className="m-9 text-center text-xl font-medium">
        در حال حاضر هیچ اطلاعاتی جهت نمایش موجود نیست.
      </p>
    );

  return <section className="my-1.5">{data.map(render)}</section>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
