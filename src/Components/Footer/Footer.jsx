import styles from "./Footer.module.css"
import * as React from 'react';



const Footer = () => {
    return (
        <footer >
            <a href="https://github.com/gfLobo/apollo" className={`flex justify-content-center align-items-center ${styles["footer"]}`}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="github"
                    width={50}
                    style={{ marginRight: 10 }}
                />
                <p>Github</p>
            </a>
            <div className={styles["blur-circle-shape"]} />
        </footer>
    )
}

export default Footer