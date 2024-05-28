import React from "react";
import "./homeScreen.css";
import profile from "../../assets/profile.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ems from "../../assets/ems.jpg";
import tw from "../../assets/tw.png";
import voting from "../../assets/Voting.png";
function HomeScreen() {
  return (
    <div className="HomeScreen">
      <div className="homeLeftSide">
        <div className="leftProfile">
          <img className="profileImgHome" src={profile} alt="profile pic"></img>
          <div className="socialLink">
            <InstagramIcon
              sx={{ fontSize: "40px" }}
              className="socialMediaIcon"
            />
            <TwitterIcon
              sx={{ fontSize: "40px" }}
              className="socialMediaIcon"
            />
            <XIcon sx={{ fontSize: "40px" }} className="socialMediaIcon" />
            <YouTubeIcon
              sx={{ fontSize: "40px" }}
              className="socialMediaIcon"
            />
          </div>
          <div className="hireMeBtn">HIRE ME</div>
        </div>
      </div>
      <div className="homeRightSide">
        <div className="homeIntro">
          <div className="titlePortfolio">PORTFOLIO</div>
          <div className="homeBriefIntro">
            <span className="spanColorTitle">Hello</span>, I'm Yash, MERN Full
            Stack Developer
          </div>
          <div className="detailIntro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="homeIntroIconsDetail">
            <div className="homeIconDetailBlock">
              <PlaceIcon className="locationIcon" sx={{ fontSize: "40px" }} />
              <div className="locationBlockContent">Meerut, Uttar Pradesh</div>
            </div>
            <div className="homeIconDetailBlock">
              <PhoneAndroidIcon
                className="phoneIcon"
                sx={{ fontSize: "40px" }}
              />
              <div className="locationBlockContent">+91 7819969933</div>
            </div>
            <div className="homeIconDetailBlock">
              <MailOutlineIcon
                className="emailIcon"
                sx={{ fontSize: "40px" }}
              />
              <div className="locationBlockContent">yash.yyy.24@gmail.com</div>
            </div>
          </div>
          <div className="homeCountBlock">
            <div className="blockDivHome">
              <div className="numberHomePaga">2+</div>
              <div className="expierenceDetail">Years of Experience</div>
            </div>

            <div className="blockDivHome">
              <div className="numberHomePaga">4+</div>
              <div className="expierenceDetail">Projects Done </div>
            </div>

            <div className="blockDivHome">
              <div className="numberHomePaga">3.5/5</div>
              <div className="expierenceDetail">Leetcode Rating</div>
            </div>
          </div>
          <div className="educationBlock">
            <div className="educationBlockTitle">CAREER</div>
            <div className="EducationContentDesc">
              <span className="spanColorTitle">Education </span>and Expierence
            </div>
            <div className="EducationDetails">
              <div className="CourseMonth">July 2020 - 2024</div>
              <div className="CourseName">Btech CSE</div>
            </div>
            <div className="EducationDetails">
              <div className="CourseMonth">July 2020 - 2024</div>
              <div className="CourseName">Btech CSE</div>
            </div>
            <div className="EducationDetails">
              <div className="CourseMonth">July 2020 - 2024</div>
              <div className="CourseName">Btech CSE</div>
            </div>
          </div>
          <div className="educationBlock">
            <div className="educationBlockTitle">SKILLS</div>
            <div className="EducationContentDesc">
              <span className="spanColorTitle">My</span> Skills and Knowledge
            </div>
            <div className="skillComp">
              <div className="skillCard">
                <div className="cardTitle">Frontend</div>
                <div className="skillTech">
                  <div className="skillTechName">React Js</div>
                  <div className="skillTechName">HTML</div>
                  <div className="skillTechName">CSS</div>
                  <div className="skillTechName">Java Script</div>
                  <div className="skillTechName">Tailwind</div>
                  <div className="skillTechName">Material UI</div>
                  <div className="skillTechName">Next Js</div>
                </div>
              </div>
              <div className="skillCard">
                <div className="cardTitle">Frontend</div>
                <div className="skillTech">
                  <div className="skillTechName">React</div>
                </div>
              </div>
              <div className="skillCard">
                <div className="cardTitle">Frontend</div>
                <div className="skillTech">
                  <div className="skillTechName">React</div>
                </div>
              </div>
              <div className="skillCard">
                <div className="cardTitle">Frontend</div>
                <div className="skillTech">
                  <div className="skillTechName">React</div>
                </div>
              </div>
            </div>
          </div>
          <div className="educationBlock">
            <div className="educationBlockTitle">WORK</div>
            <div className="EducationContentDesc">
              <span className="spanColorTitle">Featured</span>Projects
            </div>
            <div className="imageBlock">
              <div className="imageOpacityDiv">
                <div className="imageBlockDiv">
                  <img className="projectImageHome" src={ems} alt="EMS" />
                  <div className="projectHomeName">
                    Employee Management System
                  </div>
                </div>
                <div className="imageOpacityDiv">
                  <div className="imageBlockDiv">
                    <img
                      className="projectImageHome"
                      src={tw}
                      alt="Travelling Website"
                    />
                    <div className="projectHomeName">Travelling Website</div>
                  </div>
                </div>
                <div className="imageOpacityDiv">
                  <div className="imageBlockDiv">
                    <img
                      className="projectImageHome"
                      src={voting}
                      alt="Voting System"
                    />
                    <div className="projectHomeName">Voting System</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
