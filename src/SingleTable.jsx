import React from 'react';
import './SingleTable.css'; // Import the CSS file

const TableComponent = () => {
  const headers = [
    "NAMA LIMBAH B3",
    "TANGGAL MASUK",
    "ASAL",
    "JUMLAH MASUK (TON)",
    "TANGGAL MAKSIMAL PENYIMPANAN (t=0+90)",
    "TANGGAL KELUAR",
    "TUJUAN",
    "JUMLAH KELUAR (TON)",
    "MANIFEST",
    "SISA STOK (TON)"
  ];

  const data = [
    ["Oli Bekas (B105d)", "31 Mei 2024", "Saldo Mei 2024", "50", "-", "-", "-", "-", "-", "50"],
    ["Used Rags (B110d)", "", "", "4", "", "", "", "", "", "4"],
    ["Kemasan Bekas (B104d)", "", "", "1", "", "", "", "", "", "1"]
  ];

  const mergeRowData = [
    {
        "startRowIndex": 0,
        "endRowIndex": 3,
        "startColumnIndex": 1,
        "endColumnIndex": 2
    },
    {
        "startRowIndex": 0,
        "endRowIndex": 7,
        "startColumnIndex": 2,
        "endColumnIndex": 3
    }
  ];

  return (
    <div>
      <h2>Table Data</h2>
      <table className="styled-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => {
                const isMergedCell = mergeRowData.some(
                  ({ startRowIndex, endRowIndex, startColumnIndex, endColumnIndex }) =>
                    rowIndex === startRowIndex && columnIndex === startColumnIndex
                );

                const rowspan = mergeRowData.find(
                  ({ startRowIndex, startColumnIndex }) =>
                    rowIndex === startRowIndex && columnIndex === startColumnIndex
                )?.endRowIndex - rowIndex || 1;

                if (isMergedCell) {
                  return (
                    <td key={columnIndex} rowSpan={rowspan} className="centered-text">
                      {cell}
                    </td>
                  );
                }

                const isPartOfMergedCell = mergeRowData.some(
                  ({ startRowIndex, endRowIndex, startColumnIndex, endColumnIndex }) =>
                    rowIndex > startRowIndex && rowIndex < endRowIndex && columnIndex === startColumnIndex
                );

                if (!isPartOfMergedCell) {
                  return <td key={columnIndex}>{cell}</td>;
                }

                return null;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
