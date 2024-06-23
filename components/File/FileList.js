import React from 'react';
import FileItem from './FileItem';

function FileList() {
  const fileList = [
    {
      id: 1,
      name: 'ImportantFiles.docx',
      type: 'doc',
      size: '8956 kB',
      modifiedAt: 'Jun 18, 2024'
    },
    {
      id: 2,
      name: 'Deatils.pdf',
      type: 'pdf',
      size: '5628 kB',
      modifiedAt: 'May 12, 2024'
    },
    {
      id: 3,
      name: 'FunnyPicture.jpeg',
      type: 'image',
      size: '9082 kB',
      modifiedAt: 'Mar 8, 2024'
    },
    {
      id: 4,
      name: 'React Principal.docx',
      type: 'doc',
      size: '6272 kB',
      modifiedAt: 'Jan 23, 2024'
    }
  ];

  return (
    <div className='bg-white mt-5 p-5 rounded-lg'>
      <h2 className='text-[18px] font-bold'>Recent Files</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 text-[13px] font-semibold border-b-[1px] pb-2 mt-3 border-gray-300 text-gray-400'>
        <h2>Name</h2>
        <div className='grid grid-cols-3'>
          <h2>Modified</h2>
          <h2>Size</h2>
          <h2>Type</h2>
        </div>
      </div>
      {fileList && fileList.map((item) => (
        <FileItem file={item} key={item.id} />
      ))}
    </div>
  );
}

export default FileList;
