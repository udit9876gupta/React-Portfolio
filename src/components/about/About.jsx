import React from "react";
import "./about.css";
import Award from '../../img/award.png'

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long established fact that a reader will be distracted by
            the readable content.
          </p>
          <p className="a-desc">
            Creative in design and good problem solving skills. Trained in C,
            C++,Javascript, PHP and learning MERN stack. Passionate about
            learning more and implementing my knowledge in the professional
            field. Looking for a career to start as an entry level software
            engineer in a reputed firm that has broad scope of technology.
          </p>
          <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
              <h4 className="a-award-title">
                Best UI on College Level 2020
              </h4>
              <p className="a-award-desc">
               Won the best website user interface design in college competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
