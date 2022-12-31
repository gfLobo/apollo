import * as React from 'react';
import styles from './PachesCarousel.module.css'
import Grid from '@mui/material/Grid';
import Magnifier from 'react-magnifier'

const images = [
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Apollo_1_patch.png',
        title: 'Apollo 1',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Apollo7.png',
        title: 'Apollo 7',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Apollo-8-patch.png',
        title: 'Apollo 8',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Apollo_9_mission_patch.png',
        title: 'Apollo 9',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Apollo-10-LOGO.png',
        title: 'Apollo 10',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Apollo_11_insignia.png/375px-Apollo_11_insignia.png',
        title: 'Apollo 11',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Apollo_12_insignia.png',
        title: 'Apollo 12',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Apollo_13-insignia.png/800px-Apollo_13-insignia.png',
        title: 'Apollo 13',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Apollo_14-insignia.png',
        title: 'Apollo 14',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Apollo_15-insignia.png/800px-Apollo_15-insignia.png',
        title: 'Apollo 15',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Apollo-16-LOGO.png',
        title: 'Apollo 16',
    }, {
        url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Apollo_17-insignia.png',
        title: 'Apollo 17',
    }
];






export default function PachesCarousel() {
    return (
        <div className={styles["Patches"]}>
            <h3 className={styles["Title"]}>Patches</h3>
            <div className={styles["Container"]}>
                {images.map((image) => (
                    <div className={styles["ImagePatch"]} key={image.title}>
                        <Magnifier src={image.url} alt={`${image.title} patch`}   />
                    </div>
                ))}
            </div  >
        </div>
    );
}