"use client";
import Image from "next/image";
import styles from "./page.module.css";
import MobilePhone from "./Images/Mobile.png";
import ComputerIcon from "./Images/Computer.png";
import ConfuseMenIcon from "./Images/Confuse.png";
import SeriouseMenIcon from "./Images/Men.png";
import MobilePhoenIcon from "./Images/MobilePhone.png";
import NoteBookIcon from "./Images/NoteBook.png";
import SettingIcon from "./Images/Setting.png";
import SettingCertified from "./Images/Setting-certified.png";
import WebDesignIcon from "./Images/Web-design.png";
import ThumbMenIcon from "./Images/Thumb-men.png";
import DownArrow from "./Images/DownArrow.png";
import PolyGon from "./Images/Polygon.png";
import LeftArrow from "./Images/Left-arrow.png";
import RightArrow from "./Images/Right-arrow.png";
import Backlog from "./Images/Backlog.png";
import People from "./Images/People.png";
import Line from "./Images/Line.png";
import LineOne from "./Images/Line1.png";
import Upline from "./Images/Upline.png";
import RandomLine from "./Images/RandomLine.png";
import SideLine from "./Images/sideLine.png";
import DownLine from "./Images/DownLine.png";
import SimpleLine from "./Images/SimpleLine.png";
import AnglePic from './Images/AnglePic.png'
import Devops from './Images/Devops.png'
import Intertaive from './Images/Intertaive.png'
import LeftArrowLine from "./Images/LeftArrowLine.png";
import WaterFallModels from './Images/WaterFallModels.png'
import GradientLine from './Images/GradientLine.png'
import Line65 from './Images/Line65.png'
import SmallLine from './Images/SmallLine.png'
import SomeBiggerLine from './Images/SomeBiggerLine.png'
import BiggerLine from './Images/BiigerLine.png'
import ShipIcon from './Images/Sheep.png'
import JavaScriptIcons from './Images/JavaScript-icons.png'
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Section />
      <SecondSection />
      <Polygon />
      <AnglileModal />
      <ExpertToday />
      <WhyChoose />
      <FrequentAskQuestion />
    </main>
  );
}

const Header = () => {
  return (
    <div className={styles.Haeder_container}>
      <div className={styles.left_side}>
        <p className={styles.left_side_para}>
          Boost Your Web Development Success with Stackkaroo's
        </p>
        <h2 className={styles.left_side_heading}>
          PROJECT <br /> EXECUTION <br /> MODEL
        </h2>
        <button className={styles.btn}>Let’s Discuss</button>
      </div>
      <div>
        <Image src={MobilePhone} alt="mobilePhone" />
      </div>
    </div>
  );
};
const Section = () => {
  return (
    <div className={styles.Section_container}>
      <ul>
        <li>Flexible</li>
        <li>Client-Centric</li>
        <li>Balanced</li>
      </ul>
      <div className={styles.para_div}>
        <p>
          Every project is one-of-a-kind, which means it needs to be treated
          with care and attention. In addition to considering the cost, time,
          and scope, the relationship between the client and the agency is also
          crucial in maintaining a balance.
        </p>
      </div>
    </div>
  );
};

const SecondSection = () => {
  return (
    <div className={styles.SectionSectionContainer}>
      <div className="w-[8%] h-full border-r-[2px] border-slate-500 relative">
      <div>
        <Image src={SmallLine} alt="smallLine" />
      </div>
      <div>
        <Image src={SomeBiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div className="absolute bottom-[2px] left-5">
        <Image src={ShipIcon} alt="smallLine" />
      </div>
      
      </div>
      <div className="w-[62%] h-full border-r-[2px] border-slate-500 py-7 px-10 relative">
        <h3 className="text-[50px] text-[#F78319] font-[800] leading-[75px]">TYPES</h3>
        <p className="text-[35px] font-[700] leading-[53px]">Requirements, Scope, Functionalities and Utilization</p>
        <div className="flex flex-row justify-start items-center mt-9">
          <Image src={AnglePic} alt="angle_pic"  style={{width: '60px', height: '60px'}}/>
          <p className="ml-4 text-[30px] leading-[45px] text-[#36454F]">Agile Model</p>
        </div>
        <div className="flex flex-row justify-start items-center mt-9">
          <Image src={Devops} alt="Devops"  style={{width: '60px', height: '60px'}}/>
          <p className="ml-4 text-[30px] leading-[45px] text-[#36454F]">DevOps Model</p>
        </div>
        <div className="flex flex-row justify-start items-center mt-9">
          <Image src={Intertaive} alt="Iterative"  style={{width: '60px', height: '60px'}}/>
          <p className="ml-4 text-[30px] leading-[45px] text-[#36454F]">Iterative Model</p>
        </div>
        <div className="flex flex-row justify-start items-center mt-9">
          <Image src={WaterFallModels} alt="Waterfall"  style={{width: '60px', height: '60px'}}/>
          <p className="ml-4 text-[30px] leading-[45px] text-[#36454F]">Waterfall Model</p>
        </div>
        {/* AbSolute Line */}
        <div className="absolute top-[310px]">
            <Image src={GradientLine} alt="gradientLine"/>
        </div>
        {/* SecondAbsolute Line */}
        <div className="absolute top-[410px]">
            <Image src={GradientLine} alt="gradientLine"/>
        </div>
        {/* ThirdAbsolute Line */}
        <div className="absolute top-[510px]">
            <Image src={GradientLine} alt="gradientLine"/>
        </div>
      </div>
      <div className="w-[32%] h-full border-r-[2px] border-slate-500 py-7 px-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[50px] text-[#F78319] font-[700]">50+</h2>
          <p className="text-center text-[22px] leading-[33px] text-[#36454F]">Businesses were introduced last year on Digital Platform</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9">
          <h2 className="text-[50px] text-[#F78319] font-[700]">4.6 *</h2>
          <p className="text-center text-[22px] leading-[33px] text-[#36454F]">Rating on Google by our Trusted Clients</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-9">
          <h2 className="text-[50px] text-[#F78319] font-[700]">20+</h2>
          <p className="text-center text-[22px] leading-[33px] text-[#36454F]">Positive Reviews on Glassdoor</p>
        </div>
      </div>
      <div className="w-[8%]">
        <div className="w-full h-20 border-b-2 border-slate-500 p-2">
          <Image src={JavaScriptIcons} alt="javaScri[ts_icons"/>

        </div>
        <div>
        <Image src={SmallLine} alt="smallLine" />
      </div>
      <div>
        <Image src={SomeBiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
      <div>
        <Image src={BiggerLine} alt="smallLine" />
      </div>
    
      </div>

      {/* absolute-line */}
      <div className="absolute bottom-[60px] w-full">
          <Image src={Line65} alt="line_65" style={{width: "92.6%"}}/>
      </div>
    </div>
  );
};

const Polygon = () => {
  return (
    <div className={styles.Polygon}>
      <Image src={PolyGon} alt="polugon" objectFit="contain" />
    </div>
  );
};

const AnglileModal = () => {
  return (
    <div className={styles.AnglileModalContainer}>
      <h3 className="mb-4">Agile Model</h3>
      <div className="flex flex-row justify-between items-start border-[2px] border-slate-500 rounded-md">
        {/* Left-Side */}
        <div className="w-[60%] relative">
          <div className="w-[222px] h-[48px] border-[1px] text-center py-1 mt-10 mx-auto border-[#F78319] rounded-xl bg-[#fff]">
            <p className="text-[22px] text-[#F78319] font-[600]">
              Sprint Planning
            </p>
          </div>
          {/* First part */}
          <div className="w-full h-[130px]  mt-[60px] flex flex-row items-center justify-around px-16">
            <div className="w-[90px] h-auto">
              <div className="bg-[#fff] rounded-full w-[70px] h-[70px] p-5">
                <Image
                  src={Backlog}
                  alt="back_log"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>
              <p className="text-[#36454F] font-[700]">Product Backlog</p>
            </div>
            <div className="mb-10">
              <Image src={Line} alt="Line" />
            </div>
            <div className="w-[90px] h-auto">
              <div className="bg-[#fff] rounded-full w-[70px] h-[70px] p-5">
                <Image
                  src={Backlog}
                  alt="back_log"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <p className="text-[#36454f] font-[700]">Product Backlog</p>
            </div>
          </div>
          {/* Second Part */}
          <div className="w-full h-[130px]  mt-[70px] flex flex-row items-center justify-around px-16">
            <div className="w-[90px] h-auto">
              <div className="bg-[#fff] rounded-full w-[70px] h-[70px] p-5">
                <Image
                  src={Backlog}
                  alt="back_log"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>
              <p className="text-[#36454F] font-[700]">Product Backlog</p>
            </div>
            <div className="mb-10">
              <Image src={LineOne} alt="line_data" />
            </div>
            <div className="w-[90px] h-auto">
              <div className="bg-[#fff] rounded-full w-[70px] h-[70px] p-5">
                <Image
                  src={Backlog}
                  alt="back_log"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>
              <p className="text-[#36454F] font-[700]">Product Backlog</p>
            </div>
            <div className="mb-10">
              <Image src={LineOne} alt="line_data" />
            </div>
            <div className="w-[90px] h-auto">
              <div className="bg-[#fff] rounded-full w-[70px] h-[70px] p-5">
                <Image
                  src={Backlog}
                  alt="back_log"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <p className="text-[#36454f] font-[700]">Product Backlog</p>
            </div>
          </div>
          {/* Sprint-Review Button */}
          <div className="w-[180px] h-[48px] border-[1px] text-center py-2 mt-24 ml-[145px]  border-[#F78319] rounded-xl bg-[#fff]">
            <p className="text-[20px] text-[#F78319] font-[600]">
              Sprint Review
            </p>
          </div>
          {/* Sprint Retrospect */}
          <div className="w-[220px] h-[48px] border-[1px] text-center py-2 mt-10 ml-[260px]  border-[#F78319] rounded-xl bg-[#fff]">
            <p className="text-[20px] text-[#F78319] font-[600]">
              Sprint Retrospect
            </p>
          </div>
          {/* AbsoluteDiv */}
          <div className="absolute top-28 left-[350px]">
            <Image src={Upline} alt="upline_img" />
          </div>
          <div className="absolute top-[280px] left-[100px]">
            <Image src={Upline} alt="upline_img" />
          </div>
          {/* Sprint-button */}
          <div className="absolute top-[210px] left-[250px]">
            <div className="w-[220px] h-[48px] border-[1px] text-center py-2  border-[#F78319] rounded-xl bg-[#fff]">
              <p className="text-[18px] text-[#F78319] font-[600]">
                Daily Scrum Meeting
              </p>
            </div>
          </div>
          {/* Middle-Upline */}
          <div className="absolute top-[280px] left-[350px]">
            <Image src={Upline} alt="upline_img" />
          </div>
          {/* right-Upline */}
          <div className="absolute top-[280px] right-[120px]">
            <Image src={Upline} alt="upline_img" />
          </div>
          {/* Random-Upline */}
          <div className="absolute top-[315px] left-[220px]  w-auto h-[80px]">
            <Image
              src={RandomLine}
              alt="Random-upline"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {/* Random-SideLine */}
          <div className="absolute top-[315px] left-[106px]">
            <Image src={SideLine} alt="Sideline-img" />
          </div>
          {/* Down_line */}
          <div className="absolute top-[393px] left-[230px]">
            <Image src={DownLine} alt="DownLine" />
          </div>
          {/* simpleLeftLine */}
          <div className="absolute top-[480px] left-[100px]">
            <Image src={SimpleLine} alt="SimpleLine" />
          </div>
          {/* LeftArrowLine */}
          <div className="absolute top-[680px] left-[100px]">
            <Image src={LeftArrowLine} alt="LeftArrowLine" />
          </div>
        </div>
        {/* RightSie */}
        <div className="border-l-[2px] border-slate-500 w-[40%]">
          <div className="px-8 py-10 w-[90%] mx-auto text-[25px]">
            <p className="text-[#36454F]">
              The Agile model is not limited to a single approach. It is a
              methodology that emphasizes adaptability and flexibility in
              software development. An Agile model follows the principles
              outlined in the Agile Manifesto and focuses on customer
              satisfaction, working software, and regular feedback. Instead of
              working on a large project, the Agile model breaks it down into
              smaller increments that can be released to customers as they are
              completed.
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-[250px] mx-auto mb-5">
            <div className="bg-[#F78319] px-5 rounded-xl">
              <Image
                src={LeftArrow}
                alt="arrow"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <div className="bg-[#F78319] px-5 rounded-xl">
              <Image
                src={RightArrow}
                alt="arrow"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ExpertToday = () => {
  return (
    <>
      <div className={styles.background_img_container}>
        <h3 className={styles.ExpertTitle}>
          Achieve Customization and Satisfaction with Stackkaroo's Carefully
          Crafted Web Solutions
        </h3>
        <p className={styles.ExpertPara}>
          Consider Stackkaroo's trusted web development services for top-notch
          and cutting-edge web development solutions. Stackkaroo boasts a team
          of highly experienced and skilled web designers and developers who are
          dedicated to delivering high-quality and innovative websites.
        </p>
        <div className={styles.buttonContainer}>
          <button>Connect with our Experts Today !</button>
        </div>
      </div>
    </>
  );
};

const WhyChoose = () => {
  const arrayOfCardItems = [
    {
      imgPath: ComputerIcon,
      content: "Leading and Affordable Website Development company in India",
    },
    {
      imgPath: NoteBookIcon,
      content: "Highly Competitive and Affordable Pricing Models",
    },
    {
      imgPath: WebDesignIcon,
      content: "Customized  and Readymade App Development Solutions",
    },
    {
      imgPath: SettingIcon,
      content: "Cashless, Secure and Multiple Payment Methods",
    },
    {
      imgPath: SeriouseMenIcon,
      content: "Streamlined Operations and Post-Launch Support",
    },
    {
      imgPath: ConfuseMenIcon,
      content: "Experienced and highly qualified team of Professionals",
    },
    {
      imgPath: MobilePhoenIcon,
      content: "Reviews, Ratings & Social Media Integration",
    },
    {
      imgPath: ThumbMenIcon,
      content: "Enhanced Customer Satisfaction",
    },
    {
      imgPath: SettingCertified,
      content: "Commitment to Quality and Timely Delivery",
    },
  ];
  return (
    <div className={styles.wholeItemContainer}>
      <h2>Why should you Choose Stackkaroo's Website Development Service?</h2>
      <div className={styles.CardContainer}>
        {arrayOfCardItems.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <Image
                src={item.imgPath}
                alt="icon_png"
                style={{ width: "85px", height: "85px" }}
              />
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FrequentAskQuestion = () => {
  const FrequentAskedQuestion = [
    {
      Question: "What are Stackkaroo's Project Execution Models?",
      Ans: `Stackkaroo's Project Execution Models are a group of rules and
      methods made to simplify web development projects. These models give
      a clear way to plan, carry out and finish projects. This makes sure
      they are successful and done well.`,
    },
    {
      Question: "What is the best project execution model for web development?",
      Ans: `The way we do a project can change based on things like its needs, how many people are on the team, time limits and what the client wants. Agile and DevOps are often chosen for making websites because they can quickly change, give results fast, and work well with new needs. But, for projects with clear and steady needs, the Waterfall method can also work well. We must check what each project needs before picking the best model for it.`,
    },
    {
      Question:
        "How do Stackkaroo's Project Execution Models help with my web development projects?",
      Ans: `Stackkaroo's Project Execution Models help manage projects in a step-by-step way. This makes it easier to organize, talk to others well, and be more productive. Use these examples to make sure your website projects finish on time, within the money limits and make the client happy.`,
    },
    {
      Question:
        "Can Stackkaroo's Project Execution Models be used for all kinds of web development projects?",
      Ans: `Yes, Stackkaroo's Project Models are made to change and fit different types of web projects. If you're making a little website or a big web app, these models can be changed to match your special project needs.`,
    },
    {
      Question:
        "How do Stackkaroo's Project Execution Models help in reducing risks in projects?",
      Ans: `Stackkaroo's Project Execution Models have risk management tactics. These help you find problems early and create plans for what to do if they happen. By dealing with problems before they happen, you can lessen their effects on your website building projects and make them run smoother.`,
    },
    {
      Question:
        "Can Stackkaroo's Project Execution Models be combined with current project management tools?",
      Ans: `Yes, Stackkaroo's Project Execution Models can easily be connected with well-known project management tools like Jira, Trello or Asana. This mixing helps teamwork, job tracking and progress check. It makes projects do better.`,
    },
    // Add more questions and answers here as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-[80%] mx-auto my-10">
      <h2 className="text-[50px] font-[900] text-[#F78319]">FAQS</h2>
      {FrequentAskedQuestion.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-xl mt-3 ${
              isOpen ? "border-[1px] border-[#0A56F1] bg-[#fff]" : ""
            }`}
          >
            <div
              onClick={() => handleClick(index)}
              className="flex flex-row justify-between items-center cursor-pointer bg-[#fff] p-3 rounded-xl"
            >
              <h3 className="text-[25px] text-[#0A56F1] font-[600]">
                {item.Question}
              </h3>
              <Image src={DownArrow} alt="down_arrow" />
            </div>
            <div
              className={`my-3 overflow-hidden transition-max-height px-3 duration-300 ease-in-out ${
                isOpen ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <p className="text-[20px] font-[500] leading-8 text-[#36454F]">
                {item.Ans}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};


//   const FrequentAskedQuestion = [
//     {
//       Quetsion: "What are Stackkaroo's Project Execution Models?",
//       Ans: `Stackkaroo's Project Execution Models are a group of rules and
//       methods made to simplify web development projects. These models give
//       a clear way to plan, carry out and finish projects. This makes sure
//       they are successful and done well.`,
//     },
//     {
//       Quetsion: "What are Stackkaroo's Project Execution Models?",
//       Ans: `Stackkaroo's Project Execution Models are a group of rules and
//       methods made to simplify web development projects. These models give
//       a clear way to plan, carry out and finish projects. This makes sure
//       they are successful and done well.`,
//     },
//     {
//       Quetsion: "What are Stackkaroo's Project Execution Models?",
//       Ans: `Stackkaroo's Project Execution Models are a group of rules and
//       methods made to simplify web development projects. These models give
//       a clear way to plan, carry out and finish projects. This makes sure
//       they are successful and done well.`,
//     },
//     {
//       Quetsion: "What are Stackkaroo's Project Execution Models?",
//       Ans: `Stackkaroo's Project Execution Models are a group of rules and
//       methods made to simplify web development projects. These models give
//       a clear way to plan, carry out and finish projects. This makes sure
//       they are successful and done well.`,
//     },
//   ];

//   const [showQuery, setShowQuery] = useState(false);
//   const handleClick = () => {
//     setShowQuery(!showQuery);
//   };
//   return (
//     <div className="w-[80%] mx-auto my-10">
//       <h2 className="text-[50px] font-[900] text-[#F78319]">FAQS</h2>
//       {FrequentAskQuestion.map((item, index) => {
//         return (
//           <div
//             className={`rounded-xl mt-3 ${
//               showQuery ? "border border-slate-600 bg-[#fff]" : ""
//             }`}
//           >
//             <div
//               onClick={handleClick}
//               className="flex flex-row justify-between items-center cursor-pointer bg-[#fff] p-3 rounded-xl"
//             >
//               <h3 className="text-[35px] text-[#0A56F1] font-[600]">
//                 What are Stackkaroo's Project Execution Models?
//               </h3>
//               <Image src={DownArrow} alt="down_arrow" />
//             </div>
//             <div
//               className={`my-3 overflow-hidden transition-max-height px-3 duration-300 ease-in-out ${
//                 showQuery ? "max-h-[200px]" : "max-h-0"
//               }`}
//             >
//               <p className="text-[20px] font-[500] leading-8 text-[#36454F]">
//                 Stackkaroo's Project Execution Models are a group of rules and
//                 methods made to simplify web development projects. These models
//                 give a clear way to plan, carry out and finish projects. This
//                 makes sure they are successful and done well.
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
