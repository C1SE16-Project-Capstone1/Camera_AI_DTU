import React, { Component } from 'react'
import './SideNavigation.css';
import { Link } from 'react-router-dom';

export default class SideNavigation extends Component {
    render() {
        return (
            <div className="sidenav">
                <h2 className="titleMain">Giới Thiệu</h2>
                <Link to="/overview">Tổng Quan</Link>
                <Link to="/mission">Sứ Mạng</Link>
                <Link to="/traditional">Truyền Thống</Link>
                <Link to="/research">Nghiên Cứu</Link>
                <Link to="/team">Đội Ngũ Hành Chính</Link>
            </div>
        )
    }
}
