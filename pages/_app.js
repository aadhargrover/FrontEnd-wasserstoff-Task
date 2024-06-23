import "@/styles/globals.css";
import SideNavBar from "@/components/SideNavBar";
import CreateFolderModal from "@/components/Folder/CreateFolderModal";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex">
        <SideNavBar />
        <div className="container space-around">
        <div className="container space-around">
            <Component {...pageProps} />
          </div>
        </div>
        <div>
      
        </div>
      </div>
    
    </>
  )
}
