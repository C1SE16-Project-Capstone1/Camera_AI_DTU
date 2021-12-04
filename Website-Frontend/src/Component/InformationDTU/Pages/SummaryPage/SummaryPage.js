import React, { Component } from 'react'
import SideNavigation from '../SideNavigation/SideNavigation';
import Number from '../Number/Number';
import Team from '../Team/Team';
import Traditional from '../Traditional/Traditional';
import Mission from '../Mission/Mission';
import Research from '../Research/Research';
import Overview from '../Overview/Overview';

export default class SummaryPage extends Component {
    render() {
        return (
            <div className="summary">
                <SideNavigation />
                <Overview />
                {/* <Research /> */}
                {/* <Mission /> */}
                {/* <Team /> */}
                {/* <Traditional /> */}
                <Number />
            </div>
        )
    }
}
