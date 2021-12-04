import React, { Component } from 'react'
import './Symptoms.css'

import mainsymp from '../../../images/main-symp-img.png';

import sympa from '../../../images/symp-a.png';
import sympb from '../../../images/symp-b.png';
import sympc from '../../../images/symp-c.png';
import sympd from '../../../images/symp-d.png';
import sympe from '../../../images/symp-e.png';
import sympf from '../../../images/symp-f.png';

export default class Symptoms extends Component {
    render() {
        return (
            <div >
                <section className="symptoms" id="symptoms" >
                    <h1 className="heading" > covid - 19 symptoms </h1>
                    <div className="columnS" >
                        <div className="main-image" >
                            <img src={mainsymp} alt="" />
                        </div>
                        <div className="box-container" >
                            <div className="box" >
                                <img src={sympa} alt="" />
                                <h3> dry cough </h3>
                            </div >
                            <div className="box" >
                                <img src={sympb} alt="" />
                                <h3> sore throat </h3>
                            </div>
                            <div className="box" >
                                <img src={sympc} alt="" />
                                <h3> cold </h3>
                            </div >
                            <div className="box" >
                                <img src={sympd} alt="" />
                                <h3> fever </h3>
                            </div >
                            <div className="box" >
                                <img src={sympe} alt="" />
                                <h3> headache </h3>
                            </div >
                            <div className="box" >
                                <img src={sympf} alt="" />
                                <h3 > vomiting </h3>
                            </div >
                        </div>
                    </div >
                </section>
            </div>
        )
    }
}