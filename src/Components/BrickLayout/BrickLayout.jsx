import styles from "./BrickLayout.module.css"

const BrickLayout = () => {
  return (
        <iframe title="Moon View" src={'https://eyes.nasa.gov/apps/orrery/#/moon'} className={styles["brick-layout"]}/>
  )
}

export default BrickLayout