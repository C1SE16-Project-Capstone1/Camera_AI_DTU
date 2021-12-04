import React, { Component } from 'react'
import './Number.css';

export default class Number extends Component {
    render() {
        return (
            <div className="number">
                <h4 className="titleNumber"><i className="fas fa-chart-line" /> &nbsp; Những Con Số</h4>
                <div className="news">
                    <div className="newsContent">
                        <div className="newsTitle">
                            <i className="far fa-star" /> NĂM THÀNH LẬP: 1994
                        </div>
                        <div className="newsTitle">
                            <i className="far fa-star" /> ĐÀO TẠO
                        </div>
                        <div className="newsTitle">
                            <ul className="listNews">
                                <li>Với gần 70.000 nghiên cứu sinh, học viên Cao học, sinh viên, học sinh đã tuyển.</li>
                                <li>Hơn 58.000 sinh viên đã tốt nghiệp.</li>
                                <li>Tổng số sinh viên hiện tại xấp xỉ 20.000.</li>
                                <li>Hơn 5.300 sinh viên trong các chương trình Tiên tiến, Quốc tế, Du học, Du học Tại chỗ và
                                    hơn 1.800 nghiên cứu sinh và học viên Cao học.</li>
                            </ul>
                        </div>
                        <div className="newsTitle">
                            <i className="far fa-star" /> CHẤT LƯỢNG ĐÀO TẠO
                        </div>
                        <div className="newsTitle">
                            <ul className="listNews">
                                <li>ĐH Ngoài Công lập Đầu tiên Đạt chuẩn Chất lượng Giáo dục</li>
                            </ul>
                        </div>
                        <div className="newsTitle">
                            <i className="far fa-star" /> VIỆC LÀM
                        </div>
                        <div className="newsTitle">
                            <ul className="listNews">
                                <li>Hơn 94% sinh viên Duy Tân có việc làm 6 tháng sau khi tốt nghiệp</li>
                                <li>Gần 100% sinh viên ngành Công nghệ Thông tin và Du lịch ra trường có việc làm.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
