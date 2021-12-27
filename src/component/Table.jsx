import React from 'react';

const Table = ({ row, col, activeIndex }) => {
  return (
    <div>
      <table id='table'>
        <tbody>
          {row
            ? Array.from({ length: row }, (_, i) => (
                <tr key={i}>
                  {col
                    ? Array.from({ length: col }, (_, j) => (
                        <td
                          key={col * i + j}
                          className={
                            col * i + j === activeIndex
                              ? 'active'
                              : 'not-active'
                          }
                        >
                          <span>{col * i + j}</span>
                        </td>
                      ))
                    : null}
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
