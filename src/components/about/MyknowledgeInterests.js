const knowledge = [
  {
    id: 1,
    text: "Proficient understanding of web markup, including HTML5 and CSS3.",
  },
  {
    id: 2,
    text: "Understanding of server-side CSS pre-processing platforms such as LESS, SASS, and CSS-in-JS libraries like styled-components.",
  },
  {
    id: 3,
    text: "Familiarity with CSS Frameworks like Tailwind CSS, Material UI, and Ant Design.",
  },
  {
    id: 4,
    text: "Good understanding of CSS Architecture principles like BEM (Block Element Modifier).",
  },
  { id: 5, text: "Experience with JavaScript, TypeScript, and jQuery." },
  {
    id: 6,
    text: "Proficient in state management using libraries such as ReactJS, Redux, Redux Toolkit.",
  },
  {
    id: 7,
    text: "Experience in developing Responsive Websites, and knowledge of SEO principles.",
  },
  {
    id: 8,
    text: "Experience with RESTful API and Websockets.",
  },
  {
    id: 9,
    text: "Able to handle multiple tasks across multiple projects simultaneously, with the ability to adapt to new workflows. Capable of discussing and suggesting requirement/system designs with clients, focusing on good UI/UX practices.",
  },
  {
    id: 10,
    text: "Understanding of layout aesthetics.",
  },
  {
    id: 11,
    text: "Basic understanding of Node.js and its server-side framework (Express.js with template engines).",
  },
];
const interests = [
  { id: 1, text: "Continuous Learning" },
  { id: 2, text: "Make UI/UX Design" },
  { id: 3, text: "Performance Optimization" },
  { id: 4, text: "Community Engagement" },
  { id: 5, text: "Creativity and Design" },
  { id: 6, text: "Data Interaction" },
];

const MyknowledgeInterests = () => {
  return (
    <div className="myapp_tm_skillbox w-full h-auto bg-white clear-both float-left pt-[90px] pr-[0px] pb-[90px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="myapp_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Knowledge</h3>
            </div>
            <div className="myapp_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {knowledge.slice(0, 5).map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="null"
                        x="0px"
                        y="0px"
                        viewBox="0 0 386.258 386.258"
                        style={{ enableBackground: "new 0 0 386.258 386.258" }}
                        xmlSpace="preserve"
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-[15px] translate-y-[-50%] shrink-0 replaced-svg"
                      >
                        <polygon points="96.879,0 96.879,386.258 289.379,193.129 " />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>

                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="myapp_section_title md:none w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold w-[0px] overflow-hidden hidden-text">
                Knowledge
              </h3>
            </div>
            <div className="myapp_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {knowledge.slice(6, 11).map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="null"
                        x="0px"
                        y="0px"
                        viewBox="0 0 386.258 386.258"
                        style={{ enableBackground: "new 0 0 386.258 386.258" }}
                        xmlSpace="preserve"
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-[15px] translate-y-[-50%] shrink-0 replaced-svg"
                      >
                        <polygon points="96.879,0 96.879,386.258 289.379,193.129 " />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                      </svg>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-[45px]">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="myapp_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Interests</h3>
            </div>
            <div className="myapp_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {interests.map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="null"
                        x="0px"
                        y="0px"
                        viewBox="0 0 386.258 386.258"
                        style={{ enableBackground: "new 0 0 386.258 386.258" }}
                        xmlSpace="preserve"
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-[15px] translate-y-[-50%] shrink-0 replaced-svg"
                      >
                        <polygon points="96.879,0 96.879,386.258 289.379,193.129 " />
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>

                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyknowledgeInterests;
