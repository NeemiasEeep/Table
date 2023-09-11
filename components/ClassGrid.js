import React, { useState } from 'react';

export default function ClassGrid({ periods, data }) {
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (value, event) => {
    setTooltipContent(value);

    const rect = event.target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + rect.height + window.scrollY + 5,
      left: rect.left + rect.width / 2 + window.scrollX,
    });
  };

  const handleMouseLeave = () => {
    setTooltipContent('');
  };

  return (
    <div className="grid grid-cols-1 gap-y-2">
      {periods.map((period) => (
        <div key={period} className="grid grid-cols-6 gap-x-1">
          {Array.from({ length: 6 }, (_, i) => {
            const cellData = data[period][i + 1];
            const colorClass = typeof cellData === 'string' ? 'bg-red-500' : 'bg-blue-500';

            return (
              <div
                key={i}
                className={`w-6 h-6 border border-gray-400 ${colorClass}`}
                onMouseEnter={(e) => handleMouseEnter(cellData, e)}
                onMouseLeave={handleMouseLeave}
              >
                {tooltipContent && (
                  <div
                    className="absolute bg-gray-800 text-white p-2 rounded shadow"
                    style={{
                      top: `${tooltipPosition.top}px`,
                      left: `${tooltipPosition.left}px`,
                    }}
                  >
                    {tooltipContent}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

