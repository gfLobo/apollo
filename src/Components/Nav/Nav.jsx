// import styles of this component
import styles from "./Nav.module.css"

// import other components
import Button from "../Elements/Button/Button"

const routes = [
    {
        name: "Home",
        route: "/",
    },
    {
        name: "History",
        route: "/history",
    }
]

// Nav component
export default function Nav() {


    return (
        <nav className={`${styles.nav} flex align-items-center`}>
            <div className={styles["blur-circle-shape"]} />

            <a className={`${styles["nav-container"]} flex align-items-center`} href="/">
                <img title="Apollo Program Logo" alt="Apollo Program Logo" src="apolloProgram.png" className={styles["logo"]} />
                <h1 className={styles["nav-title"]}>Apollo</h1>
            </a>
            <ul style={{width:"100%"}}>
                {routes.map(({ name, route }, idx) => {
                    return (
                        <li key={idx} className={`${styles["nav-item"]} ${window.location.pathname == route ? styles.active : ""}`}>
                            <a href={route}>
                                <Button  theme={window.location.pathname == route ? "matrix" : "transparent"}>{name}</Button>
                            </a>
                        </li>
                    )
                })}

            </ul>


        </nav>
    )
}
