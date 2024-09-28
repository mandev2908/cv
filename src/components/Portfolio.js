import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/cloudCity/cloudCity1.jpg",
    title: "Cloudy City",
    text: [
      "Cloudy City is here to support finding and connecting remote workers, digital nomads and freelancers in a skill sharing environment where everyone can grow from a global network of experience.",
    ],
    client: "...",
    myWork:
      "Building UX/UI, refactor & optimize component UI, intergrate API, etc...",
    date: "October 22, 2022",
    category: "...",
    teamSize: "6",
    technologiesUsed: "ReactJS",
    link: "https://cloudycity.io/",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/cloudCity/cloudCity2.jpg",
    images: [
      "assets/img/portfolio/cloudCity/cloudCity3.jpg",
      "assets/img/portfolio/cloudCity/cloudCity4.jpg",
    ],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/sgmd/sgmd1.jpg",
    title: "Saigon Medic",
    text: [
      "Welcome to Saigon Medic – your trusted destination for high-quality healthcare services in Ho Chi Minh City. With a mission to provide comprehensive health solutions, we are committed to delivering effective, safe, and friendly medical care.",
    ],
    client: "Trung Tâm Y Khoa Sài Gòn - Saigon Medic",
    myWork:
      "Building UX/UI, refactor & optimize component UI, intergrate API, etc...",
    date: "October 22, 2022",
    category: "Vietnam",
    teamSize: "6",
    technologiesUsed: "HTML, CSS",
    link: "https://saigonmedic.com/saigon-medic",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/sgmd/sgmd4.jpg",
    images: [
      "assets/img/portfolio/sgmd/sgmd2.jpg",
      "assets/img/portfolio/sgmd/sgmd3.jpg",
    ],
  },
  {
    id: 3,
    thumbnail: "assets/img/portfolio/khcn/khcn.jpg",
    title: "Sở Khoa Học và Công Nghệ",
    text: [
      "Welcome to the POC KHCN Bà Rịa - Vũng Tàu System, a platform dedicated to connecting and developing scientific and technological applications to support the sustainable development of the province. We are proud to provide a foundation that fosters research, innovation, and technology transfer to enhance the quality of life for the community.",
    ],
    client: "Sở Khoa học và Công nghệ tỉnh Bà Rịa – Vũng Tàu",
    myWork:
      "Building UX/UI, refactor & optimize component UI, intergrate API, etc...",
    date: "October 22, 2022",
    category: "Vietnam",
    teamSize: "6",
    technologiesUsed: "ReactJS",
    link: "http://poc-khcn-brvt.systems.vn/",
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/khcn/khcn1.jpg",
    images: [
      "assets/img/portfolio/khcn/khcn2.jpg",
      "assets/img/portfolio/khcn/khcn3.jpg",
    ],
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Creative Portfolio"}
              />
              {/* <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("vimeo")}
                    >
                      Vimeo
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("youtube")}
                    >
                      Youtube
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("soundcloud")}
                    >
                      Soundcloud
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("image")}
                    >
                      Image
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("detail")}
                    >
                      Detail
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              {/* <li className="vimeo mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Teresa Butler"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://vimeo.com/337293658"
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="youtube mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Ashley Flores"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=7e90gBu4pas"
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/6.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="soundcloud mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Derek Smith"
                    data-category="Soundcloud"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F159967086&show_artwork=true&maxwidth=1020&maxheight=1000&auto_play=1"
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Gloria Jenkins"
                    data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/3.jpg">
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/3.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li> */}
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Cloudy City"
                    data-category="..."
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[0]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/thumbs/cloudCity.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Saigon Medic"
                    data-category="Vietnam"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/sgmd/sgmd.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Sở Khoa Học và Công Nghệ"
                    data-category="Vietnam"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[2]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/thumbs/khcn.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
