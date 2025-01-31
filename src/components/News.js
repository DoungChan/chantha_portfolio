import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../swiperSliderProps";
import { NewsModal } from "./ContentModal";

const News = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    date: "",
    content: "",
  });
  const onOpenModal = (img, title, date, content) => {
    setOpen(true);
    setModalValue({ img, title, date, content });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", date: "", content: "" });
  };

  return (
    <Fragment>
      <div className="chantha_tm_section" id="news">
        <div className="chantha_tm_news">
          <div className="container">
            <div className="chantha_tm_main_title">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
            <div className="news_list wow fadeInUp" data-wow-duration=".7s">
              <div className="slick-container">
                <div className="slick-wrapper">
                  <Swiper {...newsSlider}>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/HHK_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Wordpress</span>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/HHK_ho.png`,
                              "Landing Page",
                              "2023-July-25 -> 2023-August-25",
                              `<div>  HHK International Co., Ltd is a company that was established as a market expansion 
                              service provider in Cambodia, particularly in Phnom Penh. The company specialises in
                               sales & distribution, marketing, and supply-chain solutions.
                              <a href="https://www.hhkinternational.com.kh/hhkv2/" target="_blank">Demo</a> And also contribution of build Website <a href="https://www.goodhill.com.kh" target="_blank">Goodhill Enterprise (Cambodia) Ltd</a>
                              </div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/scm_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Angularjs, PHP, SQLserver</span>
                          <h3>Tools: Gitlab, Trello</h3>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/scm_ho.png`,
                              "Web application",
                              "2023-Nov-01 -> Present",
                              `<div>I have taken the place of build as well as developed a comprehensive Business Management System as the teams that integrates Stock Control Management, 
                              Supply Chain Management, and Trucking Management into a single platform. This system streamlines all business processes based on user roles, 
                              ensuring efficient tracking and management of operations across multiple divisions and branches of Goodhill in Cambodia.
                              <br>
                              Key functionalities include:
                              <br>
                            ✅ Inventory & Order Management – Tracks stock levels, purchase orders, and supplier interactions.
                              <br>
                            ✅ Delivery & Trucking Management – Manages trucking schedules, delivery orders, and generates detailed trucking reports.
                              <br>
                            ✅ Real-Time Data & Analytics – Provides actionable insights for better decision-making.
                              <br><br>
                              Additionally, I have implemented a Human Resource & Staffing Management (HRSM) System for internal use and available for clients. 
                              This system enhances workforce management, streamlines HR processes, and improves operational efficiency.
                              </div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/immigration_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Nuxtjs, Tailwind, Nodejs, Docker</span>
                          <h3>Tools: Gitlab, ZOHO, Vscode</h3>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/immigration_ho.png`,
                              "Web application",
                              "2023-November-01 -> 2024-August-01",
                              `<div>Immigration Lamonde is an immigration service for employers that they are having project to create a plateform
                              collaboration with the Ministry of CANADA that provide the plateform between company and employee to work as the 
                              immigration people at CANADA</div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/proadvisor_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>
                            Nextjs, Tailwind, Docker, Springboot, Figma
                          </span>
                          <h3>Tools: Github, Vscode</h3>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/proadvisor_ho.png`,
                              "Web application",
                              "2023-May-19 -> 2023-July-21",
                              `<div>Proadvisor is a platform to provide knowledge to users that they can
                              finding the best option regarding comparison loans, foxed deposits,
                              and saving money based on all banks in Cambodia
                              <a href="https://github.com/YinChantha/proadviser_api" target="_blank">Github</a>.
                              </div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/web3_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>
                            Reactjs, MaterailUI, Nodejs, Solidity, Docker, Figma
                          </span>
                          <h3>Tools: Github, Vscode</h3>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/web3_ho.png`,
                              "Web application",
                              "2022-April-21 -> 2023-July-18",
                              `<div>Web3 is the marketplace plateform that allow users to buy and sale the trading
                               bot source code using meta mask wallet 
                               <a href="https://github.com/YinChantha/Web3-Tradingbot-Frontend" target="_blank">Github</a>
                               </div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/sms_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Electron, React, Tailwind, Figma</span>
                          <h3>Tools: Github, Vscode</h3>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/sms_po.png`,
                              "Desktop application",
                              "2022-November- 11 -> 2023-January-20",
                              `<div>School Management System is the desktop application to mange students and
                              teachers such as attendace student, salary teacher, schedule teacher as well as
                              schedule student <a href="https://github.com/incubation-center/Electron-DesktopApp---Group7" target="_blank">Github</a>
                              </div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/engineernest_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>React, Vite, Tailwind, Figma</span>
                          <h3>Tools: Github, Vscode</h3>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/engineernest_ho.png`,
                              "Landing Page",
                              "2023-July-25 -> 2023-August-25",
                              `<div>EngineerNest is the system aim to provide a plateform
                              for the developer and the start-up in order to communicate well to collaboration <a href="https://engineer-nest.vercel.app/" target="_blank">Demo</a>
                              and <a href="https://github.com/YinChantha/Engineer-Nest" target="_blank">Github</a>
                              </div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/bitroom_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Boostrap</span>
                          <h3>Tools: Github, Vscode</h3>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/bitroom_po.png`,
                              "Landing Page",
                              "2020-December-01 -> 2021-Febuary-10",
                              `<div>Bitroom is a Virtual Company or a Start Up Under Kiritom Institute of Technology
                              to provides service to the owner of the coffee shop with the interior design
                              <a href="https://bitroom.netlify.app/" target="_blank">Demo</a>
                              and <a href="https://github.com/YinChantha/BITroom" target="_blank">Github</a>
                              </div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage:
                                "url(/img/news/smart_shop_po.png)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>Flutter, Provider State Management</span>
                          <h3>Tools: Github, Vscode</h3>
                        </div>
                        <a
                          className="chantha_tm_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/smart_shop_ho.png`,
                              "Mobile Application",
                              "2023-August-21 -> 2023-October-20",
                              `<div>
                              <div>
                                Smartshop is an ecommerce with a mobile app project that build for my personal learning for
                                online shopping with a beautiful user interface <a href="https://github.com/YinChantha/smartshop" target="_blank">Github</a>
                              </div>`
                            )
                          }
                        ></a>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="chantha_tm_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        date={modalValue.date}
        content={modalValue.content}
      />
    </Fragment>
  );
};

export default News;
