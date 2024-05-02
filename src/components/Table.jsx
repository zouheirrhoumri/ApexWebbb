export default function Table({ title, headers, data }) {
  return (
    <div className="container mx-auto shadow-xl my-6">
      <div className="w-11/12 mx-auto">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-grey-lighter">
                {row.map((cell, cellIdx) => (
                  <td
                    key={cellIdx}
                    className={`py-4 px-6 ${
                      cellIdx === 1 ? "text-center" : ""
                    } border-b border-grey-light`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
