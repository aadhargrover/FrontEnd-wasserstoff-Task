import app from '@/config/FirebaseConfig';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { actionAsyncStorage } from 'next/dist/client/components/action-async-storage-instance';
import React, { useState } from 'react'



function CreateFolderModal() {
    const docId=Date.now().toString();
    const [folderName,setFolderName]=useState();
    const db=getFirestore(app)
    const onCreate=async()=>{
        console.log(folderName)
        await setDoc(doc(db,"Folders",docId),{
            name:folderName,
            id:docId,
        })
    }
    return (
        <div>
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className="w-full items-center 
        flex flex-col justify-center gap-3">
          <img src="/folder.png" alt="folder" width={50} height={50} />
          <input
            type="text"
            placeholder="Folder Name"
            className="p-2 border-[1px] outline-none
                rounded-md"
                onChange={(e)=>setFolderName(e.target.value)}
          />
          <button className="bg-blue-500
          text-white rounded-md p-2 px-3 w-full"
          onClick={()=>onCreate()}
          >Create</button>
          </div>
            </form>
        </div>
        
    )
}

export default CreateFolderModal