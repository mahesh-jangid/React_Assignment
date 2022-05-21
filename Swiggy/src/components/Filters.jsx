import React from "react";

export const Filters = ({ data, filters, activeTab, updateFilter }) => {
  return (
    <div className="container restaurants">
      <h1>{data.length} restaurants</h1>
      <div className="restaurant-options">
        {Object.entries(filters).map(([key, value]) => {
          //   console.log(activeTab == key);
          return (
            <div
              key={key}
              className={`restaurant-option ${
                activeTab == key ? "active" : null
              }`}
              onClick={() => updateFilter(key)}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
