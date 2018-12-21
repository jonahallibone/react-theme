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
                    <h2>Assess the client’s challenges</h2>
                    </div>
                    <div className="flex-scroll-item">
                        <section className="section">
                            <h4>Understanding & Discovery</h4>

                            <h4>Articulating & Clarifying</h4>

                            <h4>Positioning & Differentiating</h4>
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
