import React from "react";
import { v4 as uuidV4 } from "uuid";

type Props = {
  config: any;
  data: any;
};

const Table = ({ data, config }: Props) => {

  const renderedHeaders = config.map((config: any) => {
    return (
    
        <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          {config.label}
        </th>

    );
  });
  
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={uuidV4()}>
        {config.map((val: any) => {
          return <td className="p-3">{val.render(company)}</td>;
        })}
      </tr>
    );
  });

  

  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table className="min-w-full divide-y divide-gray-200 m-5">
        <thead className="bg-gray-50"><tr>{renderedHeaders}</tr></thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
