import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { FaSort } from "react-icons/fa";

const CommonTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 overflow-auto bg-primary rounded-md border-2 border-darkPrimary dark:border-primaryBg">
      <div className="py-4 px-8">
        <input
          type="text"
          placeholder="Search..."
          value={filtering}
          className="block w-full px-4 py-3 text-lightPrimary bg-mildPrimary border-2 border-lightPrimary rounded-md focus:outline-none placeholder:text-lightPrimary"
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div>
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={index}
                  onClick={header.column.getToggleSortingHandler()}
                  className="border-y border-lightPrimary p-4"
                >
                  {header.isPlaceholder ? null : (
                    <p className="text-sm text-common flex justify-center items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        {
                          asc: <IoIosArrowDropupCircle />,
                          desc: <IoIosArrowDropdownCircle />,
                        }[header.column.getIsSorted()]
                      }
                      <FaSort
                        className={`${
                          sorting.length ||
                          header.column.columnDef.header === " " ||
                          header.column.columnDef.header === "Status"
                            ? "invisible"
                            : "visible"
                        }`}
                      />
                    </p>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="even:bg-lightPrimary odd:bg-mildPrimary text-common"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-sm font-normal p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination  */}
      <div
        className={`py-4 px-4 text-common *:rounded *:bg-lightPrimary *:py-1 *:px-2 space-x-4 text-center ${
          data.length > 10 ? "block" : "hidden"
        }`}
      >
        <button onClick={() => table.setPageIndex(0)}>First</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last
        </button>
      </div>
    </div>
  );
};

CommonTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default CommonTable;
