import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  createColumnHelper,
} from "@tanstack/react-table";
import { parseISO, isSameDay, format } from "date-fns";

const transactions = [
  {
    id: 1,
    amount: 990,
    category: "electricity",
    charges: 986.04,
    date_created: "2024-10-31T10:03:56.264085+01:00",
    network: null,
    number: "94100459372",
    reference: "REF.Electricity.1",
    is_executed: true,
    verified: false,
  },
  {
    id: 2,
    amount: 500,
    category: "airtime",
    charges: 490,
    date_created: "2024-11-18T13:00:00",
    network: "MTN",
    number: "08139148223",
    reference: "REF.Airtime.2",
    is_executed: false,
    verified: null,
  },
  {
    id: 3,
    amount: 100,
    category: "airtime",
    charges: 98,
    date_created: "2024-11-19T06:13:00",
    network: "MTN",
    number: "08139148223",
    reference: "REF.Airtime.3",
    is_executed: false,
    verified: null,
  },
];

const columnHelper = createColumnHelper();

function TransactionTable() {
  const [filters, setFilters] = useState({
    date: null, // Single date filter
    exactAmount: null,
    category: "",
  });

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", {
        header: "ID",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("amount", {
        header: "Amount",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("category", {
        header: "Category",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("charges", {
        header: "Charges",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("date_created", {
        header: "Date Created",
        cell: (info) => format(parseISO(info.getValue()), "yyyy-MM-dd HH:mm"),
      }),
      columnHelper.accessor("network", {
        header: "Network",
        cell: (info) => info.getValue() || "N/A",
      }),
      columnHelper.accessor("reference", {
        header: "Reference",
        cell: (info) => info.getValue(),
      }),
    ],
    []
  );

  // Filter the data based on filters state
  const filteredData = useMemo(() => {
    return transactions.filter((transaction) => {
      const { date, exactAmount, category } = filters;

      const transactionDate = parseISO(transaction.date_created);

      const matchesDate = !date || isSameDay(transactionDate, new Date(date));
      const matchesAmount =
        !exactAmount || transaction.amount === parseFloat(exactAmount);
      const matchesCategory = !category || transaction.category === category;

      return matchesDate && matchesAmount && matchesCategory;
    });
  }, [filters]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value || null,
    }));
  };

  return (
    <div className="mt-10">
      {/* Filters Section */}
      <div className="filters my-4 flex gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="date">Filter by Date</label>
          <input
            type="date"
            onChange={(e) => handleFilterChange("date", e.target.value)}
            className="border border-borderColor rounded-lg p-3.5 focus:outline-0 bg-transparent placeholder:font-groteska-regular w-full placeholder:font-base text-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Amount</label>
          <input
            type="number"
            onChange={(e) => handleFilterChange("exactAmount", e.target.value)}
            placeholder="e.g., 500"
            className="border border-borderColor rounded-lg p-3.5 focus:outline-0 bg-transparent placeholder:font-groteska-regular w-full placeholder:font-base text-white"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Category</label>
          <select
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="border border-borderColor rounded-lg p-3.5 focus:outline-0 bg-transparent placeholder:font-groteska-regular w-full placeholder:font-base text-white"
          >
            <option value="" className="text-black">
              All
            </option>
            <option value="airtime" className="text-black">
              Airtime
            </option>
            <option value="electricity" className="text-black">
              Electricity
            </option>
            <option value="data" className="text-black">
              Data
            </option>
            <option value="cable_tv" className="text-black">
              CableTv
            </option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <table className="font-fontMont text-white mt-10 w-full !border-none !border-transparent ">
        <thead className="bg-[#171717] !border-none  ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="!border-none !border-transparent "
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border px-4 py-2">
                  {header.isPlaceholder ? null : header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border px-4 py-2">
                  {cell.renderValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
