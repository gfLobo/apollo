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

            <div className={` flex align-items-center`}>
                <img title="Apollo Program Logo" alt="Apollo Program Logo" src="apolloProgram.png" className={styles["logo"]} />
                <h1 className={styles["nav-title"]}>Apollo</h1>
            </div>
            <ul >
                {routes.map(({ name, route }) => {
                    return (
                        <li className={`${styles["nav-item"]} ${window.location.pathname == route ? styles.active : ""}`}>
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
