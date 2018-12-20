import React, { Component } from 'react';
import './Expertise.css';
import ScrollAnim, { ScrollOverPack } from 'rc-scroll-anim';
import { Container } from 'react-grid-system';

class Expertise extends Component {
    render() {
        return(
            <div id="expertise">
                <div className="flex-scroll-container">
                    <div className="flex-scroll-item sticky">
                    <h2>Hello</h2>
                    </div>
                    <div className="flex-scroll-item">
                        <section className="section">
                        </section>
                        <section className="section">
                        </section>
                        <section className="section">
                        </section>
                    </div>
                </div>
            </div>
        )   
    }
 }

export default Expertise;
