import React, { Component } from 'react'
import './Research.css';

export default class Research extends Component {
    render() {
        return (
            <div className="contentR">
                <div className="main">
                    <h2 className="mainh2">NGHIÊN CỨU</h2>
                    <div className="contentNC">
                        <p className="titleNC">
                            Cùng với công tác đào tạo, công tác nghiên cứu khoa học đã được Hội Đồng Quản Trị và Ban Giám
                            Hiệu đặc biệt quan tâm thông qua việc ban hành các chủ trương, chính sách động viên, khuyến
                            khích cán bộ, nhân viên, giảng viên và sinh viên tham gia thực hiện. Đây còn là một chỉ tiêu thi
                            đua bắt buộc đối với các đơn vị và cá nhân ở Duy Tân. Nhà trường cũng không ngừng đầu tư tài
                            liệu và thiết bị nghiên cứu, mời các Giáo sư đầu ngành trong và ngoài nước hướng dẫn nghiên cứu
                            cho đội ngũ của trường, gửi giảng viên đi tham gia các hội nghị và hội thảo nghiên cứu khoa học
                            quốc gia và quốc tế.
                        </p>
                        <img className="imgNC" src="https://duytan.edu.vn/upload/images/nc1-29.jpg" alt="" />
                        <img className="imgNC" src="http://duytan.edu.vn/upload/images/shpt5-61.jpg" alt="" />
                        <img className="imgNC" src="https://duytan.edu.vn/upload/images/nc2-94.jpg" alt="" />
                        <img className="imgNC" src="https://duytan.edu.vn/upload/images/nc3-50.jpg" alt="" />
                        <p className="titleNC">
                            Mục tiêu xây dựng nhà trường theo hướng đào tạo gắn liền với nghiên cứu thực nghiệm trên nền
                            nhân văn hiện đại là nhằm đào tạo ra những Chuyên viên, Cử nhân, Thạc sĩ, Tiến sĩ có khả năng
                            thực tế cao, có thể bắt tay ngay vào các công việc thực tiễn mà không đòi hỏi các doanh nghiệp
                            sử dụng lao động phải mất thời gian huấn luyện lại. Chương trình đào tạo của nhà trường đã khắc
                            phục được những hạn chế của phương pháp đào tạo thiên về lý thuyết mà nhiều trường đại học ở
                            nước ta đang mắc phải. Chính vì vậy, công tác nghiên cứu ở Duy Tân được đẩy mạnh và hướng vào
                            các chủ đề mang tính ứng dụng cao, đi thẳng vào thực tiễn, kết hợp với doanh nghiệp nhằm đáp ứng
                            nhu cầu phát triển kinh tế và xã hội của đất nước trong giai đoạn mới. Tỉ lệ trên 95% sinh viên
                            ra trường có việc làm ngay sau 6 tháng tốt nghiệp, cùng với nội dung của các đề tài nghiên cứu
                            đã và đang là minh chứng cụ thể cho mục tiêu mang tính chiến lược của nhà trường.
                        </p>
                    </div>
                    <div className="tag">
                        <i className="fas fa-tags">Tag:</i>
                        <a href="#"> Đại Học Duy Tân</a>
                        <a href="#">nghiên cứu khoa học</a>
                        <a href="#">báo quốc tế</a>
                    </div>
                </div>
            </div>
        )
    }
}
