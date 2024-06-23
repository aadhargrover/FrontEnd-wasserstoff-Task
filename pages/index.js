import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import FolderList from "@/components/Folder/FolderList";
import FileList from "@/components/File/FileList";
import { collection, getFirestore, query } from "firebase/firestore";
import app from "@/config/FirebaseConfig";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
const db=getFirestore(app)
const [folderList,setFolderList]=useState([])
  const getFolderList=async()=>{
    const q=query(collection(db,"Folders"));
    const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setFolderList(folderList=>([...FolderList,doc.data()]))
});

  }
  return (
    <>
      <div className="p-5">
        <SearchBar/>
        <FolderList folderList={folderList}/>
        <FileList/>
      </div>
    </>
  );
}
