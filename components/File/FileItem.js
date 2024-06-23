import React from 'react';

function FileItem({ file }) {
  return (
    <div className='grid grid-cols-1
    md:grid-cols-2
    text-[13px]
    font-semibold
    border-b-[1px]
    py-2
    mt-3
    border-gray-300
    text-gray-700
    hover:bg-blue-500
    hover:text-white
    hover:shadow-lg
    hover:scale-105
    transition
    duration-300
    ease-in-out'>
      <h2>{file.name}</h2>
      <div className='grid grid-cols-3'>
        <h2>{file.modifiedAt}</h2>
        <h2>{file.size}</h2>
        <h2>{file.type}</h2>
      </div>
    </div>
  );
}

export default FileItem;
