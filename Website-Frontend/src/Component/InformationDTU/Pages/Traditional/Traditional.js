import React, { Component } from 'react'
import './Traditional.css';

export default class Traditional extends Component {
    render() {
        return (
            <div className="contentT">
                <div className="main">
                    <h2 className="mainh2">TRUYỀN THỐNG</h2>
                    <div className="container">
                        <div className="row content1">
                            <div className="col-sm-4">
                                <a href="#">
                                    <img className="imageBig" src="https://duytan.edu.vn/upload/images/30-10-2017-9-5-6-74.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-8">
                                <h4 className="titleBig"><a href="https://duytan.edu.vn/su-mang/su-mang-cua-dai-hoc-duy-tan-5t8">Màu sắc</a>
                                </h4>
                                <p className="contentBig">
                                    Màu nâu thẫm đỏ* thể hiện sự hiện thực, tính nguyên tắc; là màu của sự ổn định, và đây
                                    cũng chính là đặc điểm cơ bản của Đại học Duy Tân. Gần giống như màu gạch nung, nó thể
                                    hiện sự vững mạnh
                                </p>
                            </div>
                        </div>
                        <div className="row content2">
                            <div className="col-sm-4">
                                <a href="#">
                                    <img className="imageSmall" src="https://duytan.edu.vn/upload/_thumbs/Images/25-10-2017-15-11-40-12.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-8">
                                <h4 className="titleSmall"><a href="https://duytan.edu.vn/su-mang/khau-hieu-h5s">Linh vật - Con
                                    cò</a>
                                </h4>
                                <i>24/10/2017</i>
                                <p className="contentSmall">
                                    Con Cò, từ những ngày đầu thành lập trường, thường được nhiều người trong và ngoài
                                    trường nói đùa hay ví von về Đại học Duy Tân. Một số người ngầm ý về sự nhỏ bé và gian
                                    khó trong những...
                                </p>
                            </div>
                        </div>
                        <div className="row content2">
                            <div className="col-sm-4">
                                <a href="#">
                                    <img className="imageSmall" src="https://duytan.edu.vn/upload/_thumbs/Images/30-10-2017-9-3-6-16.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-8">
                                <h4 className="titleSmall"><a href="https://duytan.edu.vn/su-mang/muc-tieu-0w6">Hành khúc Duy
                                    tân</a>
                                </h4>
                                <i>24/10/2017</i>
                                <p className="contentSmall">
                                    Năm 1999, nhân một chuyến viếng thăm Trường Đại Học Duy Tân của nhạc sĩ Thuận Yến, chính
                                    phong cảnh và tình cảm thầy trò nơi đây đã khơi dậy trong lòng nhạc sĩ Thuận Yến một
                                    khúc tâm giao,...
                                </p>
                            </div>
                        </div>
                        <div className="row content2">
                            <div className="col-sm-4">
                                <a href="#">
                                    <img className="imageSmall" src="https://duytan.edu.vn/upload/_thumbs/Images/25-10-2017-15-17-40-30.jpg" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-8">
                                <h4 className="titleSmall"><a href="https://duytan.edu.vn/su-mang/muc-tieu-0w6">Biểu tượng</a>
                                </h4>
                                <i>24/10/2017</i>
                                <p className="contentSmall">
                                    Biểu tượng của Đại học Duy Tân được thiết kế gần hai mươi năm về trước bởi họa sĩ danh
                                    tiếng Bửu Chi. Biểu tượng như một quyển sách đang mở ra trong tay người, thể hiện khát
                                    vọng không...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
