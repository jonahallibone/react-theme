// @flow

import React from "react";
import { Parallax } from 'react-scroll-parallax';
import styles from "./NewPracticeSection.module.css";
import Image from "./Image";
import { ProjectsContext } from "../../ProjectsContext";

const NewPracticeSection = () => {
    return (
        <ProjectsContext.Consumer>
            {({ practice }) => (
                !practice.length ? "" :
                <div className={styles.new_practice_section}>
                    <div className={styles.row}>
                        <div className={styles.full_bleed}>
                            <Parallax className={styles.cube_para} y={[-40, 40]} tagOuter="figure">
                                <Image src={practice[0].acf["parallax_image_#1"]} />
                            </Parallax>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.cube}>
                            <div className={`${styles.cube_content} ${styles.padding_right}`}>
                                <h2 className="text-white reg light">Who we are</h2>
                                <p className="text-grey reg lighter">
                                    {practice[0].acf.who_we_are}
                                </p>
                            </div>
                        </div>
                        <div className={`${styles.cube} ${styles.img_cube}`}>
                            <Parallax className={styles.cube_para} y={[-20, 20]} tagOuter="figure">
                                <Image src={practice[0].acf["parallax_image_#2"]} />
                            </Parallax>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={`${styles.cube} ${styles.img_cube}`}>
                            <Parallax className={styles.cube_para} y={[-20, 20]} tagOuter="figure">
                                <Image src={practice[0].acf["parallax_image_#3"]} />
                            </Parallax>
                        </div>
                        <div className={styles.cube}>
                        <div className={`${styles.cube_content} ${styles.padding_left}`}>
                            <h2 className="text-white reg light">What we do</h2>
                            <p className="text-grey reg lighter">
                                {practice[0].acf.what_we_do}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.full_bleed}>
                            <Parallax className={styles.cube_para} y={[-40, 40]} tagOuter="figure">
                                <Image src={practice[0].acf["parallax_image_#4"]} />
                            </Parallax>
                        </div>
                    </div>
                </div> 
            )}
        </ProjectsContext.Consumer>       
    )
}

export default NewPracticeSection;
