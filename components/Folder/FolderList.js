import React from 'react'
import FolderItem from './FolderItem'

function FolderList() {
    const folderList=[
          {
                 id:1,
                 name:'React'
             },
             {
                 id:2,
                 name:'Node'
             },
             {
                 id:3,
                 name:'Mern'
             },
             {
                 id:4,
                 name:'Angular'
             },
             {
                 id:5,
                 name:'Tailwind'
             },
             {
                id:6,
                name:'Html'
             },
             {
                id:7,
                name:'CSS'
             },
             {
                id:8,
                name:'Python'
             },
             {
                id:9,
                name:'AI/ML'
             },
             {
                id:10,
                name:'Cloud'
             },
         ]
      
  return (
    <div className='p-5 mt-5 bg-white rounded-lg'>
        <h2 className='text-17px] font-bold
        item-center'>Recent Folders
        <span
          className="float-right
        text-blue-400 font-normal
        text-[13px]"
        >
            View All
        </span>
        </h2>
        <div className='grid grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5 mt-3
        gap-4'>
            {folderList.map((item)=>(
                 <FolderItem folder={item}/>
            ))}
        </div>
    </div>
  )
}

export default FolderList