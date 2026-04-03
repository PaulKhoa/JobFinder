import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <main>
        {/* Hero Area Start */}
        <div className="slider-area">
          <div
            className="single-slider section-overly slider-height2 d-flex align-items-center"
            style={{
              backgroundImage: `url("assets/img/hero/about.webp")`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>Thông tin về chúng tôi</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}

        {/* Support Company Start */}
        <div className="support-company-area fix section-padding2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  {/* Section Title */}
                  <div className="section-tittle section-tittle2">
                    <span>Chúng tôi đã làm gì</span>
                    <h2>24.000+ ứng viên tài năng đã tìm được việc làm phù hợp</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      Chúng tôi kết nối những ứng viên xuất sắc với nhà tuyển dụng hàng đầu, mang đến cơ hội nghề nghiệp đa dạng và phù hợp với từng cá nhân.
                    </p>
                    <p>
                      Với hệ thống tuyển dụng thông minh và hỗ trợ tận tâm, chúng tôi giúp bạn dễ dàng tìm kiếm và ứng tuyển vào các vị trí mơ ước nhanh chóng và hiệu quả.
                    </p>
                    <Link to={"/login"} className="btn post-btn">
                      Tham gia ngay
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  <img src="assets/img/avatar2024.jpg" alt="Ảnh đại diện" />
                  <div className="support-img-cap text-center">
                    <p>Từ năm</p>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Support Company End */}

        {/* How Apply Process Start */}
        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          style={{
            backgroundImage: `url("assets/img/gallery/how-applybg.png")`,
          }}
        >
          <div className="container">
            {/* Section Title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle white-text text-center">
                  <span>Quy trình ứng tuyển</span>
                  <h2>Cách thức hoạt động</h2>
                </div>
              </div>
            </div>
            {/* Apply Process Caption */}
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-search"></span>
                  </div>
                  <div className="process-cap">
                    <h5>1. Tìm kiếm công việc</h5>
                    <p>
                      Duyệt qua hàng ngàn việc làm phù hợp với kỹ năng và sở thích của bạn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-curriculum-vitae"></span>
                  </div>
                  <div className="process-cap">
                    <h5>2. Ứng tuyển nhanh chóng</h5>
                    <p>
                      Nộp hồ sơ chỉ với vài bước đơn giản, tiếp cận nhà tuyển dụng hiệu quả.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="process-cap">
                    <h5>3. Nhận việc làm mơ ước</h5>
                    <p>
                      Được tuyển dụng và bắt đầu hành trình phát triển sự nghiệp của bạn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How Apply Process End */}

        {/* Testimonial Start */}
        <div className="testimonial-area testimonial-padding">
          <div className="container">
            {/* Testimonial contents */}
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  {/* Single Testimonial */}
                  <div className="single-testimonial text-center">
                    {/* Testimonial Content */}
                    <div className="testimonial-caption">
                      {/* founder */}
                      <div className="testimonial-founder">
                        <div className="founder-img mb-30">
                          <img src="assets/img/testmonial/hihi1.png" alt="Vo Chi Khuong" />
                          <span>Võ Chí Khương</span>
                          <p>Giám đốc Sáng tạo</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “Chúng tôi tin rằng mỗi cá nhân đều sở hữu tiềm năng to lớn và xứng đáng được phát huy tối đa; vì vậy, chúng tôi không ngừng tạo dựng môi trường làm việc năng động, công bằng và phát triển bền vững, nơi mỗi nhân viên đều được trân trọng, trao cơ hội thăng tiến và đóng góp tích cực vào sự thành công chung của doanh nghiệp.”
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Single Testimonial */}
                  <div className="single-testimonial text-center">
                    {/* Testimonial Content */}
                    <div className="testimonial-caption">
                      {/* founder */}
                      <div className="testimonial-founder">
                        <div className="founder-img mb-30">
                          <img src="assets/img/testmonial/hihi2.png" alt="Pham Ngoc Dang Khoa" />
                          <span>Phạm Ngọc Đăng Khoa</span>
                          <p>Giám đốc Điều hành</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “Trong hành trình tìm kiếm nhân tài, chúng tôi không chỉ nhìn vào kỹ năng mà còn đánh giá niềm đam mê và tinh thần cầu tiến, bởi vì chúng tôi hiểu rằng đội ngũ mạnh mẽ nhất là đội ngũ biết cùng nhau phát triển và kiến tạo giá trị bền vững cho tương lai.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}

        {/* Online CV Area Start */}
        <div
          className="online-cv cv-bg section-overly pt-90 pb-120"
          style={{
            backgroundImage: `url("assets/img/gallery/cv_bg.jpg")`,
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cv-caption text-center">
                  <p className="pera1">Cơ hội việc làm nổi bật</p>
                  <p className="pera2">
                    Tạo ấn tượng mạnh mẽ với hồ sơ xin việc trực tuyến của bạn!
                  </p>
                  <a href="#" className="border-btn2 border-btn4">
                    Tải lên hồ sơ của bạn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Online CV Area End */}
      </main>
    </>
  );
};

export default About;
