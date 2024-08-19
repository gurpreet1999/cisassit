import React, { useEffect, useRef } from "react";
import "./SelfAssesment.scss";
import illustrator from "../../Assest/Illustration 2.png";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import CallIcon from "@mui/icons-material/Call";
import callGuyImg from "../../Assest/workingProcess/IMG1.png";
import computer from "../../Assest/Group\ 46.png"
import Lottie from "lottie-react";
import MessageTyping from "../../Assest/animation/typinganimation.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const SelfAssesment = () => {

  useGSAP(() => {
    gsap.utils.toArray("h1").forEach((heading) => {
      gsap.fromTo(
        heading,
        {
          y: "-55px",
          opacity: "0",
        },
        {
          y: "0px",
          opacity: 1,
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: heading,

            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });
    gsap.utils.toArray("h2").forEach((heading) => {
      gsap.fromTo(
        heading,
        {
          y: "-55px",
          opacity: "0",
        },
        {
          y: "0px",
          opacity: 1,
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: heading,

            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });

    gsap.utils.toArray(".left p").forEach((para) => {
      gsap.fromTo(
        para,
        {
          y: "-55px",
          opacity: "0",
        },
        {
          y: "0px",
          opacity: 1,
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: para,

            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });

    gsap.utils.toArray(".right p").forEach((para) => {
      gsap.fromTo(
        para,
        {
          y: "-55px",
          opacity: "0",
        },
        {
          y: "0px",
          opacity: 1,
          duration: 2.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: para,

            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });
  });

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cardSpecial",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    timeline.to(".cardSpecial.one", {
      opacity: 1,
      duration: 2,
      ease: "power3.inOut",

      onComplete: () => {
        document.querySelector(
          ".cardSpecial.one .growthAnimation"
        ).style.display = "none";
        document.querySelector(
          " .cardSpecial.one .stepCardContent"
        ).style.display = "flex";
      },
    });
    timeline.to(".cardSpecial.two", {
      opacity: 1,
      duration: 2,
      ease: "power3.inOut",
      onComplete: () => {
        document.querySelector(
          ".cardSpecial.two .growthAnimation"
        ).style.display = "none";
        document.querySelector(
          ".cardSpecial.two .stepCardContent"
        ).style.display = "flex";
      },
    });
    timeline.to(".cardSpecial.three", {
      opacity: 1,
      duration: 2,
      ease: "power3.inOut",
      onComplete: () => {
        document.querySelector(
          ".cardSpecial.three .growthAnimation"
        ).style.display = "none";
        document.querySelector(
          ".cardSpecial.three .stepCardContent"
        ).style.display = "flex";
      },
    });
    timeline.to(".cardSpecial.four", {
      opacity: 1,
      duration: 2,
      ease: "power3.inOut",
      onComplete: () => {
        document.querySelector(
          ".cardSpecial.four .growthAnimation"
        ).style.display = "none";
        document.querySelector(
          ".cardSpecial.four .stepCardContent"
        ).style.display = "flex";
      },
    });
  });

  return (
    <div className="selfAssesment">
      <section className="heroSection">
        <div className="left">
          <h1>Self assessments made simple</h1>
          <h2>£149 +VAT (No hidden fees)</h2>
          <p>
            Whatever your employment circumstances, we make self-assessment tax
            returns easy for you.
          </p>
          <p>You can find out more about our process below.</p>

          <div className="review"></div>
        </div>
        <div className="right">
          <div className="form">
            <h2>Let’s get started</h2>
            <p>
              Add your details below, pay £149 +VAT (no hidden fees), and one of
              our accounting consultants will get in touch to progress with your
              self assessment.
            </p>

            <form>
              <header>
                <h2>
                  Send us your details and one of our team will be in touch
                  today.
                </h2>
              </header>
              <div className="wrapper">
                <Person2RoundedIcon className="inputIcon" />
                <input
                  className="input100"
                  type="text"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="wrapper">
                <EmailRoundedIcon className="inputIcon" />
                <input type="text" placeholder="Email" required />
              </div>
              <div className="wrapper">
                <CallIcon className="inputIcon" />
                <input type="number" placeholder="Phone Number" required />
              </div>
              <div className="btnCont">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="ourProcess">
        <h1>Our Process</h1>
        <div className="processContainer">
          <div className="left">
            <div className="cardContainer">
              <div className="cardContainer">
                <div className="cardSpecial one">
                  <div className="stepCardIndicator">
                    <img src={callGuyImg} alt="" />
                  </div>
                  <Lottie
                    className="growthAnimation"
                    animationData={MessageTyping}
                    speed={5}
                    loop={true}
                  />
                  <div className="stepCardContent">
                    <div style={{ color: "black" }} className="stepCount">
                      Step 1
                    </div>
                    <div className="stepContent">
                    Fill out the sign-up form with your basic details.
                    </div>
                  </div>
                </div>

                <div className="cardSpecial two">
                  <div className="stepCardIndicator">
                    <img src={callGuyImg} alt="" />
                  </div>
                  <Lottie
                    className="growthAnimation"
                    animationData={MessageTyping}
                    speed={5}
                    loop={true}
                  />
                  <div className="stepCardContent">
                    <div style={{ color: "black" }} className="stepCount">
                      Step 2
                    </div>
                    <div className="stepContent">
                    We’ll reach out the same day to schedule a call with a accountant.
                    </div>
                  </div>
                </div>
                <div className="cardSpecial three">
                  <div className="stepCardIndicator">
                    <img src={callGuyImg} alt="" />
                  </div>
                  <Lottie
                    className="growthAnimation"
                    animationData={MessageTyping}
                    speed={5}
                    loop={true}
                  />
                  <div className="stepCardContent">
                    <div style={{ color: "black" }} className="stepCount">
                      Step 3
                    </div>
                    <div className="stepContent">
                    You’ll receive a document checklist to help us process your self-assessment.
                    </div>
                  </div>
                </div>

                <div className="cardSpecial four">
                  <div className="stepCardIndicator">
                    <img src={callGuyImg} alt="" />
                  </div>
                  <Lottie
                    className="growthAnimation"
                    animationData={MessageTyping}
                    speed={5}
                    loop={true}
                  />
                  <div className="stepCardContent">
                    <div style={{ color: "black" }} className="stepCount">
                      Step 4
                    </div>
                    <div className="stepContent">
                    Once we have everything, we’ll prepare and submit your self-assessment within 20 days..
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">

            <img src={computer}/>


          </div>
        </div>
      </section>

      <div className="ourAssistance">
        <div className="container">
          <div className="left">
            <figure>
              <img src={illustrator} alt="" />
            </figure>
          </div>
          <div className="right">
            <h1>Who we help</h1>
            <p>
              Making a self-assessment tax return has never been simpler, and we
              strive to help everyone including those that are:
            </p>

            <div className="helpList">
              <div className="list">
                <figure>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                      fill="#2FAB73"
                    />
                  </svg>
                </figure>
                <label>Self employed</label>
              </div>
              <div className="list">
                <figure>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                      fill="#2FAB73"
                    />
                  </svg>
                </figure>
                <label>
                  Newly self-employed who need to register for self-assessment
                </label>
              </div>
              <div className="list">
                <figure>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                      fill="#2FAB73"
                    />
                  </svg>
                </figure>
                <label>
                  Employed and wish to claim expenses and allowances to which
                  they are entitled
                </label>
              </div>
              <div className="list">
                <figure>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
                      fill="#2FAB73"
                    />
                  </svg>
                </figure>
                <label>
                  Require to pay capital gains tax on the sale of a property or
                  investment
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAssesment;
