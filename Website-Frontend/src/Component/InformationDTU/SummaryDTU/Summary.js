import React, { Component } from "react";
import "./Summary.css";
import { Routes, Route, Link } from "react-router-dom";

import home1 from "../../../images/home1.jpg";
import bia47 from "../../../images/bia-47.jpg";
import s1 from "../../../images/s1.jpg";
import s2 from "../../../images/s2.jpg";
import s3 from "../../../images/s3.jpg";
import s4 from "../../../images/s4.jpg";
import s5 from "../../../images/s5.jpg";
import lt from "../../../images/luyenthidaihoc.png";
import tn from "../../../images/tracnghiemhuongnghiep.png";
import hb from "../../../images/xethocba.png";
import dd from "../../../images/diendansinhvien.png";
import SummaryPage from "../Pages/SummaryPage/SummaryPage";
import top500 from "../../../images/top500.jpg";

export default class Summary extends Component {
  render() {
    return (
      <div>
        <section className="homeSumary" id="home-page">
          <div className="content">
            <div className="title-home">
              <h1>
                Đại Học Duy Tân vào Top 500 Thế Giới <br /> theo bảng Time
                Higher Education (THE) 2022
              </h1>
              <h3>
                Tổ chức Times Higher Education (THE) vừa công bố bảng xếp hạng
                các trường đại học tốt nhất thế giới...
              </h3>
              <Link to="/summarypage" element={SummaryPage} className="btn">
                Xem Thêm...
              </Link>
            </div>
            <div className="home-page">
              <div className="imageL">
                <img className="imgHome" src={home1} alt="" />
              </div>
              <div className="slide">
                <div className="card-group">
                  <div className="card">
                    <div className="image">
                      <img
                        className="card-image"
                        title="Lễ Kỷ niệm 27 năm Thành lập Đại học Duy Tân"
                        src={bia47}
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body">
                      <a
                        className="titleTin"
                        href="https://duytan.edu.vn/news/NewsDetail.aspx?id=5141&pid=2068&lang=vi-VN"
                      >
                        <h4 className="card-title">
                          5 trường Đại học Tốt nhất Việt Nam theo U.S. News
                          &amp; World Reports 2022
                        </h4>
                      </a>
                      <i className="span-date">15/11/2021</i>
                      <p className="card-text">
                        Tạp chí của Hoa Kỳ - U.S.News &amp; World Reports vừa
                        chính thức công bố Bảng xếp các trường Đại học Tốt nhất
                        Toàn cầu năm 2022 (Best Global Universities). Riêng Việt
                        ...
                      </p>
                    </div>
                    <div className="social">
                      <i class="fab fa-facebook-square social-icon"></i>
                      <i class="fab fa-instagram-square social-icon"></i>
                    </div>
                  </div>
                  <div className="card">
                    <div className="image">
                      <img
                        className="card-image"
                        title="Các Thủ khoa gương sáng điểm cao ..."
                        src="https://duytan.edu.vn/News/uploads/media/408_256/images/dd-9.jpg"
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body">
                      <a
                        className="titleTin"
                        href="https://duytan.edu.vn/news/NewsDetail.aspx?id=5139&pid=2064&lang=vi-VN"
                      >
                        <h4 className="card-title">
                          Các Thủ khoa gương sáng điểm cao tại Đại Học Duy Tân
                          năm 2021
                        </h4>
                      </a>
                      <i className="span-date">12/11/2021</i>
                      <p className="card-text">
                        Liên tiếp những năm gần đây, ĐH Duy Tân đã trở thành
                        “bến đỗ” tin cậy của nhiều thí sinh đạt điểm cao trong
                        các kỳ thi THPT, hoặc có giải cao trong các kỳ thi Học
                        ...
                      </p>
                    </div>
                    <div className="social">
                      <i class="fab fa-facebook-square social-icon"></i>
                      <i class="fab fa-instagram-square social-icon"></i>
                    </div>
                  </div>
                  <div className="card">
                    <div className="image">
                      <img
                        className="card-image"
                        title="Lễ Khai giảng năm học 2021-2022"
                        src="https://duytan.edu.vn/News/uploads/media/408_256/images/dl2-16.jpg"
                        alt="Card image cap"
                      />
                    </div>
                    <div className="card-body">
                      <a
                        className="titleTin"
                        href="https://duytan.edu.vn/news/NewsDetail.aspx?id=5142&pid=2064&lang=vi-VN"
                      >
                        <h4 className="card-title">
                          Lễ Khai giảng năm học 2021-2022 của Viện Đào tạo và
                          Nghiên cứu Du lịch, Đại học Duy Tân
                        </h4>
                      </a>
                      <i className="span-date">14/11/2021</i>
                      <p className="card-text">
                        Sáng ngày 13/11/2021, Viện Đào tạo và Nghiên cứu Du lịch
                        thuộc ĐH Duy Tân đã long trọng tổ chức Lễ khai giảng năm
                        học 2021-2022 thông qua hình thức trực tuyến ...
                      </p>
                    </div>
                    <div className="social">
                      <i class="fab fa-facebook-square social-icon"></i>
                      <i class="fab fa-instagram-square social-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="intro">
          <a
            href="https://cmp.duytan.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img title="Đào Tạo Y Dược" className="introImg1" src={s1} alt="" />
          </a>
          <a
            href="http://dtu-hti.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="Đào Tạo Và Nghiên Cứu Du Lịch"
              className="introImg1"
              src={s2}
              alt=""
            />
          </a>
          <a
            href="https://kdtqt.duytan.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="Viện Đào Tạo Quốc Tế"
              className="introImg1"
              src={s3}
              alt=""
            />
          </a>
          <a
            href="https://scs.duytan.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="Khoa Học Máy Tính"
              className="introImg1"
              src={s4}
              alt=""
            />
          </a>
          <a
            href="https://sbe.duytan.edu.vn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="Đào Tạo Kinh Tế"
              className="introImg1"
              src={s5}
              alt=""
            />
          </a>
        </div>

        <div className="information-admissions">
          <div className="container">
            <div className="row">
              <div className="row-content">
                <a href>
                  <img src={lt} alt="Luyện Thi Đại Học" />
                </a>
              </div>
              <div className="row-content">
                <a href>
                  <img src={tn} alt="Trắc Nghiệm Hướng Nghiệp" />
                </a>
              </div>
              <div className="row-content">
                <a href>
                  <img src={hb} alt="Xét Học Bạ" />
                </a>
              </div>
              <div className="row-content">
                <a href>
                  <img src={dd} alt="Diễn Đàn Sinh Viên" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="information-school" id="information-school">
          <div className="container home-information-school">
            <div className="row row-margin">
              <div className="content-left">
                <div className="imgLeft">
                  <img
                    className="imgL"
                    src="https://duytan.edu.vn/upload/images/2-1-2020-15-9-1-31.jpg"
                    alt=""
                  />
                  <img
                    className="imgL"
                    src="https://duytan.edu.vn/upload/images/6-12-2017-8-44-11-83.jpg"
                    alt=""
                  />
                  <img
                    className="imgL"
                    src="https://duytan.edu.vn/upload/images/15-7-2019-16-56-19-88.png"
                    alt=""
                  />
                </div>
                <div className="imgRight">
                  <div className="img-wrapper">
                    <img
                      title="Tân Kỹ sư ngành Kỹ thuật Phần mềm và An toàn Thông tin ở Đại học Duy Tân được nhiều doanh nghiệp “săn đón”"
                      className="imgR"
                      src="https://duytan.edu.vn/upload/images/2G6A9232-68.jpg"
                      alt=""
                    />
                  </div>
                  <div className="title-right">
                    <h4 className="title-right-content">
                      Tân Kỹ sư ngành Kỹ thuật Phần mềm và An toàn Thông tin ở
                      Đại học Duy Tân được nhiều doanh nghiệp “săn đón”
                    </h4>
                    <div className="title-right-date">
                      <span className="span-date">15/11/2021</span>
                    </div>
                    <p className="contentRR">
                      Sinh viên theo học các ngành này ở Việt Nam luôn đảm bảo
                      có việc làm với nhu cầu nhân lực từ các doanh nghiệp vô
                      cùng cao. Mức lương cao nhất dành cho sinh viên mới tốt
                      nghiệp ngành Công nghệ Phần mềm khoảng tầm từ 27 - 30
                      triệu, còn mức trung bình rơi vào khoảng từ 12-15 triệu.
                      Sẵn sàng trả mức lương cao với nhu cầu tuyển dụng lớn
                      nhưng nhiều doanh nghiệp vẫn không tuyển đủ số lượng nhân
                      sự cần thiết.
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-right">
                <div className="content-box">
                  <div className="col-sm-4 content-images">
                    <img
                      title="Nhiều ngành học tại Đại học Duy Tân đảm bảo sinh viên 100% có việc làm sau tốt nghiệp"
                      className="image-link"
                      src="https://duytan.edu.vn/upload/_thumbs/Images/2G6A5634-73.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-8 content-title">
                    <div className="title-link magrin-left">
                      <a href="https://duytan.edu.vn/dai-hoc/nhieu-nganh-hoc-tai-dai-hoc-duy-tan-dam-bao-sinh-vien-100-co-viec-lam-sau-tot-nghiep-l7g">
                        <h4>
                          Nhiều ngành học tại Đại học Duy Tân đảm bảo sinh viên
                          100% có việc làm sau tốt nghiệp
                        </h4>
                      </a>
                      <i>22/10/2021</i>
                      <p>
                        Ít ai ngờ rằng những ngành học một vài năm trước ...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="col-sm-4 content-images">
                    <img
                      title="Học Xây dựng tại Đại học Duy Tân để trở thành những Kỹ sư tài năng"
                      className="image-link"
                      src="https://duytan.edu.vn/upload/_thumbs/Images/Untitled-1-15.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-8 content-title">
                    <div className="title-link magrin-left">
                      <a href="https://duytan.edu.vn/khoa-xay-dung/hoc-xay-dung-tai-dai-hoc-duy-tan-de-tro-thanh-nhung-ky-su-tai-nang-6kn">
                        <h4>
                          Học Xây dựng tại Đại học Duy Tân để trở thành những Kỹ
                          sư tài năng
                        </h4>
                      </a>
                      <i>19/09/2021</i>
                      <p>Xây dựng là thước đo trình độ khoa học, kinh tế ...</p>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="col-sm-4 content-images">
                    <img
                      title="Tuyển sinh ngành Y - Dược - Điều dưỡng năm 2021 tại Đại học Duy Tân"
                      className="image-link"
                      src="https://duytan.edu.vn/upload/_thumbs/Images/2G6A1710-48.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-8 content-title">
                    <div className="title-link magrin-left">
                      <a href="https://duytan.edu.vn/khoa-y/lua-chon-y-duoc-dieu-duong-2020-tai-dai-hoc-duy-tan-kj8">
                        <h4>
                          Tuyển sinh ngành Y - Dược - Điều dưỡng năm 2021 tại
                          Đại học Duy Tân
                        </h4>
                      </a>
                      <i>25/07/2021</i>
                      <p>
                        Là một ngành đặc thù liên quan đến mạng sống của ...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="col-sm-4 content-images">
                    <img
                      title="Học ngành Du lịch tại DTU năm 2021"
                      className="image-link"
                      src="https://duytan.edu.vn/upload/_thumbs/Images/_O8A0092-68.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-8 content-title">
                    <div className="title-link magrin-left">
                      <a href="https://duytan.edu.vn/khoa-du-lich/trai-nghiem-moi-truong-hoc-tap-nang-dong-chuan-%E2%80%98sao-nganh-du-lich-tai-dai-hoc-duy-tan-7ht">
                        <h4>
                          Học ngành Du lịch tại DTU năm 2021 tỷ lệ việc làm cao
                          nhất trong các khối ngành
                        </h4>
                      </a>
                      <i>24/06/2021</i>
                      <p>
                        98% sinh viên ngành Du lịch có việc làm ngay sau ...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="col-sm-4 content-images">
                    <img
                      title="Đào tạo chuyên ngành Kinh doanh số tại Đại học Duy Tân"
                      className="image-link"
                      src="https://duytan.edu.vn/upload/_thumbs/Images/_O8A0123-80.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-8 content-title">
                    <div className="title-link magrin-left">
                      <a href="https://duytan.edu.vn/khoa-quan-tri-kinh-doanh/dao-tao-chuyen-nganh-kinh-doanh-so-tai-dai-hoc-duy-tan-ci3">
                        <h4>
                          Đào tạo chuyên ngành Kinh doanh số tại Đại học Duy Tân
                        </h4>
                      </a>
                      <i>19/05/2021</i>
                      <p>Ngày nay những thiết bị điện tử cá nhân như: ...</p>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="col-sm-4 content-images">
                    <img
                      title="Những lý do chọn học ngành Dược sĩ tại Đại học Duy Tân"
                      className="image-link"
                      src="https://duytan.edu.vn/upload/_thumbs/Images/2G6A9149-73.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-8 content-title">
                    <div className="title-link magrin-left">
                      <a href="https://duytan.edu.vn/khoa-duoc/nhung-ly-do-chon-hoc-nganh-duoc-si-tai-dai-hoc-duy-tan-fxv">
                        <h4>
                          Những lý do chọn học ngành Dược sĩ tại Đại học Duy Tân
                        </h4>
                      </a>
                      <i>22/04/2021</i>
                      <p>Sau 9 năm triển khai đào tạo ngành Dược sĩ Đại ...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="major-important">
          <div className="container major-important">
            <div className="row container-row">
              <div className=" major-contain">
                <a href>
                  <p className="title-major">Đào Tạo</p>
                </a>
                <img
                  src={top500}
                  alt="Luyện Thi Đại Học"
                  className="major-image"
                />
                <div className="title-news">
                  <p>
                    Đại học Duy Tân vào Top 500 Thế giới theo bảng Times ...
                  </p>
                </div>
                <span>03/12/2021</span>
                <div className="major-icon">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="graybb">
          <div className="imgTest">
            <div className="overlayImg">
              <a
                href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-dang-cai-to-chuc-hoi-nghi-mang-luoi-thuc-tap-cho-sinh-vien-dong-nam-a-lan-thu-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageover"
                  title="ĐẠI HỌC DUY TÂN ĐĂNG CAI TỔ CHỨC HỘI NGHỊ MẠNG LƯỚI THỰC TẬP CHO SINH VIÊN"
                  src="https://duytan.edu.vn/upload/_thumbs/Images/23-10-2019-15-32-24-38.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="text">
                    ĐẠI HỌC DUY TÂN ĐĂNG CAI TỔ CHỨC HỘI NGHỊ MẠNG LƯỚI THỰC TẬP
                    CHO SINH VIÊN
                  </div>
                </div>
              </a>
            </div>
            <div className="overlayImg">
              <a
                href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-don-nhan-co-thi-dua-cua-thu-tuong-chinh-phu-trong-le-khai-giang-nam-hoc-moi-2018-2019"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageover"
                  title="ĐẠI HỌC DUY TÂN ĐÓN NHẬN CỜ THI ĐUA CỦA THỦ TƯỚNG CHÍNH PHỦ TRONG LỄ KHAI GIẢNG"
                  src="https://duytan.edu.vn/upload/_thumbs/Images/20-9-2018-9-21-7-40.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="text">
                    ĐẠI HỌC DUY TÂN ĐÓN NHẬN CỜ THI ĐUA CỦA THỦ TƯỚNG CHÍNH PHỦ
                    TRONG LỄ KHAI GIẢNG
                  </div>
                </div>
              </a>
            </div>
            <div className="overlayImg">
              <a
                href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-gioi-thieu-san-pham-may-tho-dieu-tri-benh-nhan-nhiem-sars-cov-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageover"
                  title="ĐẠI HỌC DUY TÂN GIỚI THIỆU SẢN PHẨM MÁY THỞ ĐIỀU TRỊ BỆNH NHÂN NHIỄM SARS-COV-2"
                  src="https://duytan.edu.vn/upload/_thumbs/Images/13-4-2020-15-25-8-85.jpg"
                  alt=""
                />
                <div className="overlay">
                  <div className="text">
                    ĐẠI HỌC DUY TÂN GIỚI THIỆU SẢN PHẨM MÁY THỞ ĐIỀU TRỊ BỆNH
                    NHÂN NHIỄM SARS-COV-2
                  </div>
                </div>
              </a>
            </div>
            <div className="overlayImg">
              <a
                href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-ra-mat-vien-ky-thuat-cong-nghe-viet-nhat-vjiet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageover"
                  title="ĐẠI HỌC DUY TÂN RA MẮT VIỆN KỸ THUẬT CÔNG NGHỆ VIỆT - NHẬT (VJIET)"
                  src="https://duytan.edu.vn/upload/_thumbs/Images/28-9-2018-16-17-25-55.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="text">
                    ĐẠI HỌC DUY TÂN RA MẮT VIỆN KỸ THUẬT CÔNG NGHỆ VIỆT - NHẬT
                    (VJIET)
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="imgTest">
            <div className="overlayImg">
              <a
                href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-to-chuc-hoi-nghi-quoc-te-ve-du-lich"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageover"
                  title="ĐẠI HỌC DUY TÂN TỔ CHỨC HỘI NGHỊ QUỐC TẾ VỀ DU LỊCH"
                  src="https://duytan.edu.vn/upload/_thumbs/Images/4-7-2019-10-20-59-14.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="text">
                    ĐẠI HỌC DUY TÂN TỔ CHỨC HỘI NGHỊ QUỐC TẾ VỀ DU LỊCH
                  </div>
                </div>
              </a>
            </div>
            <div className="overlayImg">
              <a
                href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-hop-tac-voi-tap-doan-phuc-loi-xa-hoi-seirei-dao-tao-nhan-luc-dieu-duong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageover"
                  title="ĐẠI HỌC DUY TÂN HỢP TÁC VỚI TẬP ĐOÀN PHÚC LỢI XÃ HỘI SEIREI ĐÀO TẠO NHÂN LỰC ĐIỀU DƯỠNG"
                  src="https://duytan.edu.vn/upload/_thumbs/Images/6-11-2018-16-15-20-70.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="text">
                    ĐẠI HỌC DUY TÂN HỢP TÁC VỚI TẬP ĐOÀN PHÚC LỢI XÃ HỘI SEIREI
                    ĐÀO TẠO NHÂN LỰC ĐIỀU DƯỠNG
                  </div>
                </div>
              </a>
            </div>
            <div className="overlayImg">
              <a
                href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-to-chuc-hoi-nghi-quoc-te-ve-du-lich"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageover"
                  title="ĐẠI HỌC DUY TÂN GIỚI THIỆU SẢN PHẨM MÁY THỞ ĐIỀU TRỊ BỆNH NHÂN NHIỄM"
                  src="https://duytan.edu.vn/upload/_thumbs/Images/13-4-2020-15-23-41-30.jpg"
                  alt=""
                />
                <div className="overlay">
                  <div className="text">
                    ĐẠI HỌC DUY TÂN GIỚI THIỆU SẢN PHẨM MÁY THỞ ĐIỀU TRỊ BỆNH
                    NHÂN NHIỄM{" "}
                  </div>
                </div>
              </a>
            </div>
            <div className="overlayImg">
              <a
                href="https://duytan.edu.vn/Galleries/dai-hoc-duy-tan-hop-tac-voi-tap-doan-phuc-loi-xa-hoi-seirei-dao-tao-nhan-luc-dieu-duong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="imageover"
                  title="ĐẠI HỌC DUY TÂN TỔ CHỨC HỘI THẢO “GIÁO DỤC NHÂN VĂN TRONG GIÁO DỤC"
                  src="https://duytan.edu.vn/upload/_thumbs/Images/10-6-2019-15-49-55-13.png"
                  alt=""
                />
                <div className="overlay">
                  <div className="text">
                    ĐẠI HỌC DUY TÂN TỔ CHỨC HỘI THẢO “GIÁO DỤC NHÂN VĂN TRONG
                    GIÁO DỤC
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
