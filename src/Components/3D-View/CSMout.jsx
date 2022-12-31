import styles from './3DView.module.css'



export default function CSMout() {
    return (
        <iframe
            className={styles["Frame"]}
            name="Smithsonian Voyager Outside View"
            src="https://3d-api.si.edu/voyager/3d_package:d8c6457e-4ebc-11ea-b77f-2e728ce88125"
            width="auto"
            height="450"
            allow="xr; xr-spatial-tracking; fullscreen"
        />
    )
}