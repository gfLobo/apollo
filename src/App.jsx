import { useState } from "react";

// import styles of this component
import styles from "./App.module.css"

// import other components to use
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import Dropdown from './Components/Elements/Dropdown/Dropdown';


// import json files 
import images from "./Jsons/Images.json"
import PachesCarousel from "./Components/PatchesCarousel/PachesCarousel";
import CSMin from "./Components/3D-View/CSMin";
import CSMout from "./Components/3D-View/CSMout";

// App component
const App = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true
    },
    {
      id: 4,
      title: "Apollo 1",
      active: false
    },
    {
      id: 5,
      title: "Apollo 7",
      active: false
    },
    {
      id: 6,
      title: "Apollo 8",
      active: false
    },
    {
      id: 7,
      title: "Apollo 9",
      active: false
    },
    {
      id: 8,
      title: "Apollo 10",
      active: false
    },
    {
      id: 9,
      title: "Apollo 11",
      active: false
    },
    {
      id: 10,
      title: "Apollo 12",
      active: false
    },
    {
      id: 11,
      title: "Apollo 13",
      active: false
    },
    {
      id: 12,
      title: "Apollo 14",
      active: false
    },
    {
      id: 13,
      title: "Apollo 15",
      active: false
    },
    {
      id: 14,
      title: "Apollo 16",
      active: false
    },
    {
      id: 15,
      title: "Apollo 17",
      active: false
    }
  ]

  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle === "All Images" ? ddTitle.toLowerCase().split(" ")[0] : ddTitle.toLowerCase().replace(' ', '')
        return item === titleSplited
      })
      return [...images.categories[categoryChoose]]
    })
  }

  return (
    <div style={{padding:50}} >
      <PachesCarousel />
      <div className={`${styles["T3Modules"]}`}>
        <div className={`${styles["trd-title"]}`}>
          {"Apollo Command and Service Module (CSM)"}
        </div>
        <CSMin />
        <CSMout />
      </div>
      <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
        <div className={`${styles["sec-title"]}`}>Crewed missions</div>
        <Dropdown title="All Images" items={ddItems} liftingDdTextUp={takeDdTitle} />
      </div>
      <MasonryLayout images={categoryImage} />
    </div>
  )
}

export default App