import React, { Component } from 'react'
import './Team.css';

export default class Team extends Component {
    render() {
        return (
            <div className="contentT">
                <div className="mainT">
                    <h2 className="mainh2">Đội ngũ hành chính</h2>
                    <div className="contentDN">
                        <p className="titleDN">
                            Bên cạnh đội ngũ giảng dạy chất lượng, Đại học Duy Tân còn có một đội ngũ hành chính chuyên
                            nghiệp và phục vụ tốt cho công tác quản lý, đào tạo của nhà trường. Đội ngũ hành chính tập trung
                            ở các Khoa, Trung tâm, Phòng. Trong suốt những năm qua đội ngũ này không ngừng phát triển và
                            nâng cao tính chuyên nghiệp trong công tác quản lý, góp phần không nhỏ vào việc ổn định và phát
                            triển bền vững của Đại học Duy Tân.
                        </p>
                        <div className="contentImg">
                            <img className="imgDN" src="https://duytan.edu.vn/upload/images/dnhc-16.jpg" alt="" />
                            <p className="titleImg">Đội ngũ cán bộ làm công tác hành chính
                                luôn nỗ lực để hỗ trợ sinh viên có môi người học tập và sinh hoạt tốt nhất</p>
                        </div>
                        <p className="titleDN">
                            Giống như đội ngũ giảng dạy, đa phần các cán bộ làm công tác hành chính ở Đại học Duy Tân còn
                            rất trẻ, năng động và sáng tạo. Với tính chất là đội ngũ hành chính trong một trường đại học,
                            bên cạnh công tác quản lý, các cán bộ hành chính của Duy Tân còn tích cực tham gia công tác
                            giảng dạy ở những bộ môn thuộc chuyên môn của mình nhằm truyền đạt những kinh nghiệm thực tế
                            nhất cho sinh viên. Với cách làm này, công tác đào tạo ở Duy Tân luôn có sự gắn bó chặt chẽ giữa
                            lý thuyết với thực hành, đúng như phương thức đào tạo mà trường đã đề ra ngay từ khi mới thành
                            lập.
                        </p> <br />
                        <p className="titleDN">
                            Một đội ngũ cán bộ chuyên nghiệp cùng với một đội ngũ giảng dạy giàu tâm huyết, đầy tài năng đã
                            giúp Duy Tân dần khẳng định được thương hiệu của mình trong giai đoạn hội nhập và phát triển.
                        </p>
                    </div>
                    <div className="tag">
                        <i className="fas fa-tags">Tag:</i>
                        <a href="#"> Đại Học Duy Tân</a>
                        <a href="#"> Đội ngũ giảng dạy</a>
                        <a href="#"> Đội ngũ hành chính</a>
                    </div>
                </div>
            </div>

        )
    }
}
