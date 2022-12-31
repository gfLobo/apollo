// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';

// Header component
const Header = () => {
  return (
    <header className={window.location.pathname == "/" ? `${styles.header} flex justify-content-center` : ""}>

      {window.location.pathname == "/" ? <BrickLayout /> : <></>}



     
        {window.location.pathname == "/" ?
          <>
           <ContainerCard className="flex flex-column">
           <Nav />

            <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
              <div className={styles["heading-header-title"]}>
                <h2 >A journey throught the lunar odyssey 🌖</h2>
              </div>

              <h1 className={styles["heading-header-second-title"]}>
                That's one small step for a man,   <br />
                one giant leap for <span>mankind</span>
              </h1>

              <HeaderBoxes titles_numbers={JsonHeader.informations} />
            </div>
            </ContainerCard>

          </> : <Nav />}




    </header>
  )
}

export default Header