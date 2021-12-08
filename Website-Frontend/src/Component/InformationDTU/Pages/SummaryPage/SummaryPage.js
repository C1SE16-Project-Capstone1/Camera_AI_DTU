import React, { Component } from 'react'
import SideNavigation from '../SideNavigation/SideNavigation';
import Number from '../Number/Number';
import Team from '../Team/Team';
import Traditional from '../Traditional/Traditional';
import Mission from '../Mission/Mission';
import Research from '../Research/Research';
import Overview from '../Overview/Overview';
import { Routes, Route } from "react-router-dom";

export default class SummaryPage extends Component {
    render() {
        return (
            <div className="summary">
                <SideNavigation />
                <Routes>
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/traditional" element={<Traditional />} />
                    <Route path="/team" element={<Team />} />
                </Routes>
                <Number />
            </div>
        )
    }
}
