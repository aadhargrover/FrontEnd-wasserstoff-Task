import menu from '@/data/menu'
import React, { useState } from 'react'
import CreateFolderModal from './Folder/CreateFolderModal';
import UploadFileModal from './File/UploadFileModal';

export default function SideNavBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='w-[200px]
    bg-white h-screen sticky top-0
    z-10 shadow-blue-200 shadow-md p-5'>
      <div className='flex justify-center'>
        <h1 style={{
          color: '#4e54c8',
          padding: '20px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#BCD2E8',
          borderRadius: '10px',
        }}>
          FILE MANAGER
        </h1>
      </div>
      <button
        onClick={() => window.upload_file.showModal()}
        className="flex gap-2 items-center text-[13px]
        bg-blue-500 p-2 text-white rounded-md px-3
        hover:scale-105 transition-all mt-5 w-full justify-center"
      >
        Add New File
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
        </svg>

      </button>
      <button
        className="flex gap-2 items-center text-[13px]
        bg-sky-400 w-full p-2 justify-center text-white rounded-md px-3
        hover:scale-105 transition-all mt-1"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        Create Folder
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z" clipRule="evenodd" />
        </svg>
      </button>

      <div>
        {menu.list.map((item, index) => (
          <div>
            <h2
              onClick={() => setActiveIndex(index)}
              className={`flex gap-2 items-center
            p-2 mt-3 text-gray-500 rounded-md cursor-pointer
            hover:bg-blue-500 hover:text-white
            ${activeIndex == index ? 'bg-blue-500 text-blue-50'
                  : null}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.logo}
                />
              </svg>
              {item.name}</h2>
          </div>

        ))}
      </div>

    
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Folders</h3>

          <div className="modal-action">
              <CreateFolderModal/>
          </div>
        </div>
      </dialog>
      <dialog id="upload_file" className="modal">
            <UploadFileModal 
            closeModal={()=>window.upload_file.close()}/>
        </dialog>
    </div>
  )
}
