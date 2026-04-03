import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/home/Categories";
import FeatureJobs from "../../components/home/FeaturesJobs";
import { getListPostService } from "../../service/userService";
import Chatbox from "../../components/home/Chatbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
  const [dataFeature, setDataFeature] = useState([]);
  const [dataHot, setDataHot] = useState([]);
 
  const loadPost = async (limit, offset) => {
    let arrData = await getListPostService({
      limit,
      offset,
      categoryJobCode: "",
      addressCode: "",
      salaryJobCode: "",
      categoryJoblevelCode: "",
      categoryWorktypeCode: "",
      experienceJobCode: "",
      sortName: false,
    });
    let arrData2 = await getListPostService({
      limit,
      offset,
      categoryJobCode: "",
      addressCode: "",
      salaryJobCode: "",
      categoryJoblevelCode: "",
      categoryWorktypeCode: "",
      experienceJobCode: "",
      sortName: false,
      isHot: 1,
    });
    if (arrData?.errCode === 0) setDataFeature(arrData.data);
    if (arrData2?.errCode === 0) setDataHot(arrData2.data);
  };

  useEffect(() => {
    loadPost(5, 0);
  }, []);

  const slides = [
    {
      image: "./assets/img/hero/hero1.png",
      text: "Khởi đầu sự nghiệp vững chắc với công việc phù hợp nhất dành cho bạn",
    },
    {
      image: "./assets/img/hero/hero2.jpg",
      text: "Mở rộng cánh cửa tương lai cùng những cơ hội nghề nghiệp chất lượng",
    },
    {
      image: "./assets/img/hero/hero3.jpg",
      text: "Khám phá vị trí mơ ước và tạo dấu ấn trong hành trình sự nghiệp",
    },
  ];

  return (
    <>
      <main>
        {/* Slide show */}
        <div className="slider-area">
          <Swiper
            className="slider-active"
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="single-slider slider-height d-flex align-items-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-xl-6 col-lg-9 col-md-10 text-center">
                        <div className="hero__caption">
                          <h1
                            className="text-white text-4xl md:text-5xl font-bold animate-fadeIn"
                            style={{
                              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                              margin: "20px 0",
                            }}
                          >
                            {slide.text}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
        `}</style>

        {/* Danh mục nghề nghiệp */}
        <div className="our-services section-pad-t30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span>Lĩnh vực công việc nổi bật</span>
                  <h2>Danh mục nghề nghiệp</h2>
                </div>
              </div>
            </div>
            <Categories />
          </div>
        </div>

        {/* Banner tìm việc */}
        <div
          className="online-cv cv-bg section-overly pt-90 pb-120"
          style={{ backgroundImage: `url("assets/img/gallery/cv_bg.jpg")` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cv-caption text-center">
                  <p className="pera1">Nhiều công việc đang chờ bạn</p>
                  <p className="pera2"> Hãy bắt đầu hành trình tìm việc ngay hôm nay!</p>
                  <Link to="/job" className="border-btn2 border-btn4">
                    Tìm việc ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Công việc nổi bật */}
        <section className="featured-job-area feature-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <h2>Công việc nổi bật</h2>
                </div>
              </div>
            </div>
            <FeatureJobs dataFeature={dataHot} />
          </div>
        </section>

        {/* Công việc mới đăng */}
        <section className="featured-job-area feature-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <h2>Công việc mới đăng</h2>
                </div>
              </div>
            </div>
            <FeatureJobs dataFeature={dataFeature} />
          </div>
        </section>

        {/* Quy trình tìm việc */}
        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          style={{
            backgroundImage: `url("assets/img/gallery/how-applybg.png")`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle white-text text-center">
                  <span>Quy trình tìm việc</span>
                  <h2> Thực hiện như thế nào ?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-search"></span>
                  </div>
                  <div className="process-cap">
                    <h5>1. Tìm kiếm công việc</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-curriculum-vitae"></span>
                  </div>
                  <div className="process-cap">
                    <h5>2. Ứng tuyển công việc</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="process-cap">
                    <h5>3. Nhận công việc</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Chatbox Together AI - dạng bong bóng */}
        {/* <div className="fixed bottom-4 right-4 w-80 max-h-[80vh] overflow-auto p-4 bg-white shadow-lg rounded-xl z-50 flex flex-col">
          <h2 className="text-lg font-bold mb-2">Hỏi AI</h2>

          <div className="flex-1 overflow-y-auto space-y-2 mb-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm max-w-[90%] ${
                  msg.role === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-black self-start mr-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Bạn muốn hỏi gì?"
            className="w-full border p-2 rounded mb-2 resize-none"
            rows={3}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Gửi
          </button>
        </div> */}
        <Chatbox />
      </main>
    </>
  );
};

export default Home;
