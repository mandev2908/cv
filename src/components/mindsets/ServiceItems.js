import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Problem Solver",
    text: [
      "Possess a strong aptitude for creative problem-solving, enabling efficient resolution of coding challenges and design dilemmas.",
    ],
    image: "assets/img/news/problem_solver_image.jpg",
  },
  {
    id: 2,
    name: "Continuous Learner",
    text: [
      "Committed to ongoing professional development, staying abreast of the latest technologies, frameworks, and best practices in web development.",
    ],
    image: "assets/img/news/continuous_learner_image.jpg",
  },
  {
    id: 3,
    name: "Attention to Detail",
    text: [
      "Meticulous attention to detail ensures the delivery of clean, efficient code and polished user experiences across all projects.",
    ],
    image: "assets/img/news/attention_to_detail_image.jpg",
  },
  {
    id: 4,
    name: "Collaborative Spirit",
    text: [
      "Excel in cross-functional teamwork and communication, adept at integrating diverse perspectives to achieve project success.",
    ],
    image: "assets/img/news/collaborative_spirit_image.jpg",
  },
  {
    id: 5,
    name: "User-Centric Approach",
    text: [
      "Prioritize the needs and experiences of end-users, crafting intuitive interfaces and responsive designs that enhance usability and engagement.",
    ],
    image: "assets/img/news/user-centric_approach.jpg",
  },
  {
    id: 6,
    name: "Attention to Performance and Security",
    text: [
      "Commitment to optimizing website performance and implementing robust security measures to ensure a seamless and secure user experience.",
    ],
    image: "assets/img/news/performance_security.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-full clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
