import React, { useState } from "react";
import { AirtimeData } from "../../utils/data";

interface Data {
  data: any;
  firstTitle: string;
  secondTitle: string;
  thirdTitle: string;
  fourthTitle: string;
  fifthTitle: string;
}
const TableComponent = ({
  data,
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  fifthTitle,
}: Data) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for the table
  const tableData = AirtimeData;
  // Function to handle pagination
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  function checkStatus(status: string) {
    switch (status) {
      case "Approved":
        return "text-[#008000]";
      case "Declined":
        return "text-[#EF5500]";
      default:
        return "text-[#fff]";
    }
  }
  return (
    <div className="flex flex-col text-white mt-10 overflow-x-auto">
      <table className="">
        <thead className="border border-[#111111]  bg-[#111111b5]">
          <tr>
            <th className="font-semibold px-4 py-4">{firstTitle}</th>
            <th className="font-semibold px-4 py-4">{secondTitle}</th>
            <th className="font-semibold px-4 py-4">{thirdTitle}</th>
            <th className="font-semibold px-4 py-4">{fourthTitle}</th>
            <th className="font-semibold px-4 py-4">{fifthTitle}</th>
          </tr>
        </thead>

        <tbody>
          {data
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((item: any) => (
              <tr
                key={item.id}
                className="border border-[#111111] bg-[#11111155]"
              >
                <td className="px-4 py-4 text-center">{item.amount}</td>
                <td className="px-4 py-4 text-center">{item.amount}</td>
                <td className="px-4 py-4 text-center">{item.phoneNumber}</td>
                <td className="px-4 py-4  text-center">{item.network}</td>
                <td
                  className={`px-4 py-4 text-center ${checkStatus(
                    item.status
                  )} `}
                >
                  {item.status}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="w-32 py-4 border border-[#111111]  rounded-l-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="px-8 py-4 border border-[#111111]">{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(tableData.length / 10)}
          className="w-32 py-4 border border-[#111111] rounded-r-lg bg-primaryPurple disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
