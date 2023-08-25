import React from 'react';

function Search() {
  return (
    <div
      className={`w-full border border-gray rounded-full p-1 flex justify-between items-center`}
    >
      <input
        className={`rounded-full focus:outline-0 placeholder:text-xs px-2 py-1`}
        placeholder="Enter project name or contract address"
      />
      <span className="ml-2 w-[35px] h-[35px] bg-resblue rounded-full flex justify-center items-center">
        <i className={`text-white ri-search-2-line`}></i>
      </span>
    </div>
  );
}

export default Search;
