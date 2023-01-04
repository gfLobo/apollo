import styles from './3DView.module.css'

export default function CSMin() {
    return (
        <iframe
            className={styles["Frame"]}
            name="Smithsonian Voyager Inside View"
            src="https://3d-api.si.edu/voyager/3d_package:d8c63e8a-4ebc-11ea-b77f-2e728ce88125"
            width="auto"
            height="450"
            allowFullScreen
            
        />
    )
}