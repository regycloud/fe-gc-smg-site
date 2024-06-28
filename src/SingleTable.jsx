import React, { useState } from 'react';
import './TableComponent.css'; // Import the CSS file
// import axios from 'axios';

// const url = 'http://localhost:1337/req'

// // state
// const [data, setData] = useState([]);
// const getData = async () => {
//     const response = await axios.get('http://localhost:1337/req');
//     setData(response.data)
// }

const TableComponent = ({data}) => {
  // Declare variable after fetching data from App.jsx
  const tableData = data[0].values;
  const mergeRowData = data[1]
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
