import React from 'react';
import './TableComponent.css'; // Import the CSS file

const TableComponent = () => {
  const tableData = [
    ["NAMA LIMBAH B3", "TANGGAL MASUK", "ASAL", "JUMLAH MASUK (TON)", "TANGGAL MAKSIMAL PENYIMPANAN (t=0+90)", "TANGGAL KELUAR", "TUJUAN", "JUMLAH KELUAR (TON)", "MANIFEST", "SISA STOK (TON)"],
    ["Oli Bekas (B105d)", "31 Mei 2024", "Saldo Mei 2024", "50", "-", "-", "-", "-", "-", "50"],
    ["Used Rags (B110d)", "", "", "4", "", "", "", "", "", "4"],
    ["Kemasan Bekas (B104d)", "", "", "1", "", "", "", "", "", "1"],
    ["Elektronik Bekas (B107d)", "", "", "0,2", "", "", "", "", "", "0,2"],
    ["L. Terkontaminasi B3 (A108d)", "", "", "3", "", "", "", "", "", "3"],
    ["Aki Bekas (A102d)", "", "", "5", "", "", "", "", "", "5"],
    ["Oli Bekas (B105d)", "01 s/d 02 Juni 2024", "Eksternal", "0", "01-Sep-24", "01 s/d 02 Juni 2024", "PT WGI", "14,4", "KLHK-1722937977", "35,6"],
    ["Used Rags (B110d)", "", "", "0", "", "", "-", "0", "-", "4"],
    ["Kemasan Bekas (B104d)", "", "", "0", "", "", "-", "0", "-", "1"],
    ["Elektronik Bekas (B107d)", "", "", "0", "", "", "-", "0", "-", "0,2"],
    ["L. Terkontaminasi B3 (A108d)", "", "", "0", "", "", "-", "0", "-", "3"],
    ["Aki Bekas (A102d)", "", "", "0", "", "", "-", "0", "-", "5"],
    ["Oli Bekas (B105d)", "03 s/d 09 Juni 2024", "Eksternal", "72", "03-Sep-24", "03 s/d 09 Juni 2024", "PT WGI", "72", "KLHK-1722937977; KLHK-1722938178; KLHK-1721590542; KLHK-1726399045; KLHK-1723328936; KLHK-1723328826; KLHK-1723329093; KLHK-1723597294", "35,6"],
    ["Used Rags (B110d)", "", "", "1", "", "", "-", "0", "-", "5"],
    ["Kemasan Bekas (B104d)", "", "", "0,4", "", "", "-", "0", "-", "1,4"],
    ["Elektronik Bekas (B107d)", "", "", "0", "", "", "-", "0", "-", "0,2"],
    ["L. Terkontaminasi B3 (A108d)", "", "", "0", "", "", "-", "0", "-", "3"],
    ["Aki Bekas (A102d)", "", "", "0", "", "", "-", "0", "-", "5"],
    ["Oli Bekas (B105d)", "10 s/d 16 Juni 2024", "Eksternal", "72", "10-Sep-24", "10 s/d 16 Juni 2024", "PT WGI", "72", "KLHK-1722937977; KLHK-1722938178; KLHK-1721590542; KLHK-1726399045; KLHK-1723328936; KLHK-1723328826; KLHK-1723329093; KLHK-1723597294", "35,6"],
    ["Used Rags (B110d)", "", "", "2", "", "", "-", "0", "", "7"],
    ["Kemasan Bekas (B104d)", "", "", "0,5", "", "", "-", "0", "", "1,9"],
    ["Elektronik Bekas (B107d)", "", "", "0", "", "", "-", "0", "", "0,2"],
    ["L. Terkontaminasi B3 (A108d)", "", "", "0", "", "", "-", "0", "", "3"],
    ["Aki Bekas (A102d)", "", "", "2", "", "", "-", "0", "", "7"],
    ["Oli Bekas (B105d)", "17 s/d 23 Juni 2024", "Eksternal", "72", "17-Sep-24", "17 s/d 23 Juni 2024", "PT WGI", "72", "KLHK-1722937977; KLHK-1722938178; KLHK-1721590542; KLHK-1726399045; KLHK-1723328936; KLHK-1723328826; KLHK-1723329093; KLHK-1723597294", "35,6"],
    ["Used Rags (B110d)", "", "", "2", "", "", "-", "0", "", "9"],
    ["Kemasan Bekas (B104d)", "", "", "0,5", "", "", "-", "0", "", "2,4"],
    ["Elektronik Bekas (B107d)", "", "", "0", "", "", "-", "0", "", "0,2"],
    ["L. Terkontaminasi B3 (A108d)", "", "", "0", "", "", "-", "0", "", "3"],
    ["Aki Bekas (A102d)", "", "", "2", "", "", "-", "0", "", "7"],
    ["Oli Bekas (B105d)", "24 s/d 30 Juni 2024", "Eksternal", "72", "24-Sep-24", "24 s/d 30 Juni 2024", "PT WGI", "72", "KLHK-1722937977; KLHK-1722938178; KLHK-1721590542; KLHK-1726399045; KLHK-1723328936; KLHK-1723328826; KLHK-1723329093; KLHK-1723597294", "35,6"],
    ["Used Rags (B110d)", "", "", "3", "", "", "PT AMP", "12", "KLHK-1723422871", "0"],
    ["Kemasan Bekas (B104d)", "", "", "1", "", "", "PT AMP", "3,4", "KLHK-1723422871", "0"],
    ["Elektronik Bekas (B107d)", "", "", "0", "", "", "PT UEP", "0,2", "KLHK-1723422871", "0"],
    ["L. Terkontaminasi B3 (A108d)", "", "", "0", "", "", "PT UEP", "3", "KLHK-1723422871", "0"],
    ["Aki Bekas (A102d)", "", "", "1", "", "", "PT NFU", "8", "KLHK-1723422871", "0"]
  ];

  const mergeRowData = [
    { "startRowIndex": 1, "endRowIndex": 7, "startColumnIndex": 1, "endColumnIndex": 2 },
    { "startRowIndex": 1, "endRowIndex": 7, "startColumnIndex": 2, "endColumnIndex": 3 },
    { "startRowIndex": 1, "endRowIndex": 7, "startColumnIndex": 4, "endColumnIndex": 5 },
    { "startRowIndex": 1, "endRowIndex": 7, "startColumnIndex": 5, "endColumnIndex": 6 },
    { "startRowIndex": 1, "endRowIndex": 7, "startColumnIndex": 6, "endColumnIndex": 7 },
    { "startRowIndex": 1, "endRowIndex": 7, "startColumnIndex": 7, "endColumnIndex": 8 },
    { "startRowIndex": 1, "endRowIndex": 7, "startColumnIndex": 8, "endColumnIndex": 9 },
    { "startRowIndex": 7, "endRowIndex": 13, "startColumnIndex": 1, "endColumnIndex": 2 },
    { "startRowIndex": 7, "endRowIndex": 13, "startColumnIndex": 2, "endColumnIndex": 3 },
    { "startRowIndex": 7, "endRowIndex": 13, "startColumnIndex": 4, "endColumnIndex": 5 },
    { "startRowIndex": 7, "endRowIndex": 13, "startColumnIndex": 5, "endColumnIndex": 6 },
    { "startRowIndex": 13, "endRowIndex": 19, "startColumnIndex": 2, "endColumnIndex": 3 },
    { "startRowIndex": 13, "endRowIndex": 19, "startColumnIndex": 4, "endColumnIndex": 5 },
    { "startRowIndex": 13, "endRowIndex": 19, "startColumnIndex": 5, "endColumnIndex": 6 },
    { "startRowIndex": 25, "endRowIndex": 31, "startColumnIndex": 4, "endColumnIndex": 5 },
    { "startRowIndex": 25, "endRowIndex": 31, "startColumnIndex": 5, "endColumnIndex": 6 },
    { "startRowIndex": 31, "endRowIndex": 37, "startColumnIndex": 1, "endColumnIndex": 2 },
    { "startRowIndex": 31, "endRowIndex": 37, "startColumnIndex": 2, "endColumnIndex": 3 },
    { "startRowIndex": 31, "endRowIndex": 37, "startColumnIndex": 4, "endColumnIndex": 5 },
    { "startRowIndex": 31, "endRowIndex": 37, "startColumnIndex": 5, "endColumnIndex": 6 },
    { "startRowIndex": 13, "endRowIndex": 19, "startColumnIndex": 1, "endColumnIndex": 2 },
    { "startRowIndex": 19, "endRowIndex": 25, "startColumnIndex": 1, "endColumnIndex": 2 },
    { "startRowIndex": 19, "endRowIndex": 25, "startColumnIndex": 2, "endColumnIndex": 3 },
    { "startRowIndex": 19, "endRowIndex": 25, "startColumnIndex": 4, "endColumnIndex": 5 },
    { "startRowIndex": 19, "endRowIndex": 25, "startColumnIndex": 5, "endColumnIndex": 6 },
    { "startRowIndex": 25, "endRowIndex": 31, "startColumnIndex": 1, "endColumnIndex": 2 },
    { "startRowIndex": 25, "endRowIndex": 31, "startColumnIndex": 2, "endColumnIndex": 3 }
  ];

  // Function to check if a cell is part of a merged region
  const isMergedCell = (rowIndex, columnIndex) => {
    for (const merge of mergeRowData) {
      if (
        rowIndex >= merge.startRowIndex &&
        rowIndex < merge.endRowIndex &&
        columnIndex >= merge.startColumnIndex &&
        columnIndex < merge.endColumnIndex
      ) {
        return merge;
      }
    }
    return null;
  };

  // Function to check if a cell is the start of a merged region
  const isMergeStart = (rowIndex, columnIndex) => {
    for (const merge of mergeRowData) {
      if (
        rowIndex === merge.startRowIndex &&
        columnIndex === merge.startColumnIndex
      ) {
        return merge;
      }
    }
    return null;
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          {tableData[0].map((header, colIndex) => (
            <th key={colIndex}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex + 1}>
            {row.map((cell, colIndex) => {
              const merge = isMergedCell(rowIndex + 1, colIndex);
              if (merge && !isMergeStart(rowIndex + 1, colIndex)) {
                return null; // Skip cells that are part of a merged region but not the start
              }
              return (
                <td
                  key={colIndex}
                  rowSpan={merge ? merge.endRowIndex - merge.startRowIndex : 1}
                  colSpan={merge ? merge.endColumnIndex - merge.startColumnIndex : 1}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
