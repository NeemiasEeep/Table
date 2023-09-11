  export default function Cal() {
    const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const rooms = ['0101', '0102', '0103'];
    const shifts = ['Manhã', 'Tarde', 'Noite'];
  
    return (
      <div className="w-full h-full p-4">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border p-2"></th>
              {daysOfMonth.map(day => (
                <th key={day} className="border p-2">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              <tr key={room}>
                <td className="border p-2">{room}</td>
                {shifts.map(shift => (
                  <td key={shift} className="border p-2">
                    <div className="grid grid-cols-3 gap-1">
                      {Array.from({ length: 9 }, (_, i) => (
                        <div key={i} className="w-4 h-4 bg-gray-300"></div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };