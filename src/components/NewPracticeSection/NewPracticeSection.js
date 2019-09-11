// @flow

import React from "react";
import { Parallax } from 'react-scroll-parallax';
import styles from "./NewPracticeSection.module.css";
import Image from "./Image";

const NewPracticeSection = () => {
    return(
        <div className={styles.new_practice_section}>
            <div className={styles.row}>
                <div className={styles.full_bleed}>
                    <Parallax className={styles.cube_para} y={[-40, 40]} tagOuter="figure">
                        <Image src="https://piscatello.s3.amazonaws.com/PDC_Studio3.jpg" />
                    </Parallax>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.cube}>
                    <div className={`${styles.cube_content} ${styles.padding_right}`}>
                        <h2 className="text-white reg light">Who we are</h2>
                        <h4 style={{fontSize: "1.65rem", lineHeight: "1.35"}} className="text-grey reg lighter">
                            Piscatello Design Centre is a multidisciplinary design consultancy, founded by Rocco Piscatello in 1997. Since then, he, and the team around him, have established a methodology for combining business strategy and creativity to help organizations realize their full potential.
                        </h4>
                    </div>
                </div>
                <div className={`${styles.cube} ${styles.img_cube}`}>
                    <Parallax className={styles.cube_para} y={[-20, 20]} tagOuter="figure">
                        <Image src="https://piscatello.s3.amazonaws.com/josh_book.jpg" />
                    </Parallax>
                </div>
            </div>
            <div className={styles.row}>
                <div className={`${styles.cube} ${styles.img_cube}`}>
                    <Parallax className={styles.cube_para} y={[-20, 20]} tagOuter="figure">
                        <Image src="https://piscatello.s3.amazonaws.com/studio_people.jpg" />
                    </Parallax>
                </div>
                <div className={styles.cube}>
                <div className={`${styles.cube_content} ${styles.padding_left}`}>
                    <h2 className="text-white reg light">What we do</h2>
                        <h4 style={{fontSize: "1.65rem", lineHeight: "1.35"}} className="text-grey reg lighter">
                        Over the year’s we’ve helped launch new businesses, rebranded existing ones, and created environmental signage for some of the best organizations in the world. We believe design and collaboration go hand and hand. Through collaboration we share, inspire, and test ideas.
                        </h4>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.full_bleed}>
                    <Parallax className={styles.cube_para} y={[-40, 40]} tagOuter="figure">
                        <Image src="https://piscatello.s3.amazonaws.com/PDC_StudioDetail2.jpg" />
                    </Parallax>
                </div>
            </div>
        </div>        
    )
}

export default NewPracticeSection;
