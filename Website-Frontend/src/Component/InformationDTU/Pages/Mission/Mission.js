import React, { Component } from 'react'
import './Mission.css'

export default class Mission extends Component {
    render() {
        return (
            <div className="contentM">
                <div className="main">
                    <h2 lass="mainh2">SỨ MẠNG</h2>
                    <div className="container">
                        <div className="row content1">
                            <div className="col-sm-4">
                                <a href="#">
                                    <img className="imageBig" src="https://duytan.edu.vn/upload/images/30-10-2017-9-29-22-75.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-8">
                                <h4 className="titleBig"><a href="https://duytan.edu.vn/su-mang/su-mang-cua-dai-hoc-duy-tan-5t8">Sứ mạng của Đại
                                    học Duy Tân</a></h4>
                                <p className="contentBig">
                                    Đào tạo, Nghiên cứu gắn liền với Khoa học và Công nghệ nhằm tạo ra những Sinh viên và
                                    Học viên có lòng yêu nước, có phẩm chất Nhân văn mang đậm Bản sắc Việt Nam, có ý thức
                                    sinh hoạt cộng đồng
                                </p>
                            </div>
                        </div>
                        <div className="row content2">
                            <div className="col-sm-4">
                                <a href="#">
                                    <img className="imageSmall" src="https://duytan.edu.vn/upload/_thumbs/Images/30-10-2017-9-27-32-15.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-8">
                                <h4 className="titleSmall"><a href="https://duytan.edu.vn/su-mang/khau-hieu-h5s">Khẩu hiệu</a>
                                </h4>
                                <i>24/10/2017</i>
                                <p className="contentSmall">
                                    Tất cả vì quyền lợi học tập, nghiên cứu và việc làm của sinh viên đáp ứng nhu cầu xã
                                    hội, khu vực và quốc tế
                                </p>
                            </div>
                        </div>
                        <div className="row content2">
                            <div className="col-sm-4">
                                <a href="#">
                                    <img className="imageSmall" src="https://duytan.edu.vn/upload/_thumbs/Images/30-10-2017-9-28-32-57.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-8">
                                <h4 className="titleSmall"><a href="https://duytan.edu.vn/su-mang/muc-tieu-0w6">Mục tiêu</a>
                                </h4>
                                <i>24/10/2017</i>
                                <p className="contentSmall">
                                    Nghiên cứu Khoa học là một trong những chức trách của mọi Giảng viên nhằm nắm vững môn
                                    học như một khoa học cả về chiều rộng lẫn chiều sâu, cả về lí thuyết lẫn thực hành, làm
                                    cơ sở cho việc...
                                </p>
                            </div>
                        </div>
                        <div className="row content3">
                            <div className="col-sm-8">
                                <h4 className="titleSmall"><a href="https://duytan.edu.vn/su-mang/phuong-cham-ur9">Phương châm</a>
                                </h4>
                                <i>24/10/2017</i>
                                <p className="contentSmall">
                                    “Bản lĩnh Việt Nam - Đổi mới, Sáng tạo, Vươn tới những tầm cao!”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
