import React, { useEffect, useRef } from "react";
import "./HomePage.scss";
import arrow from "../../Assest/TaxHoot-Arrow-1.webp";
import eligibleImage from "../../Assest/Mask Group.png";

import star from "../../Assest/Group 1161.png";
import profilepic from "../../Assest/Ellipse 175.png";
import Lottie from "lottie-react";
import heroimage2 from "../../Assest/Group 9154.png"

// Icons
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

// images
import workingProcessTalk from "../../Assest/workingProcess/wpTalk.png";
import workingProcessHandle from "../../Assest/workingProcess/wpHandle.png";
import wokringProcessPaid from "../../Assest/workingProcess/wpPaid.png";

import whatucanclaim from "../../Assest/services/claim.png";
import speaktoteam from "../../Assest/services/simpleProcess.png";
import accessrebate from "../../Assest/services/rebateQuick.png";
import dedicatedaccountmanager from "../../Assest/services/consult.png";

import trackrebate from "../../Assest/services/locate.png";
import constructionCard from "../../Assest/services/constructionImg.jpg";
import constructionCard2 from "../../Assest/services/constructionImg2.jpg";

// animation
import growthAnimation from "../../Assest/animation/growthAnimation.json";
import { useNavigate } from "react-router-dom";
import verify from "../../Assest/verify.png"
import basic from "../../Assest/basic.png"
import standard from "../../Assest/standard.png"
import premium from "../../Assest/premium.png"
import rebateplus from "../../Assest/rebateplus.png"



const HomePage = () => {
  const navigate = useNavigate();

  const navigateToClaim = () => {
    navigate("/make-a-claim");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="homePage">
      <section className="heroSection">
        <div className="left">
          <h1>
            <i>Effortless</i> Minimum CIS Rebate is <i>&#163;</i>2500

           
          </h1>
          <p>
            CISAssist simplifies  CIS Tax Rebates and CIS management for UK
            employees, we minimize the stress and maximize the rebate .
          </p>
          <button onClick={navigateToClaim}>
            <strong>Get Started</strong>
          </button>

          <div className="review"></div>
        </div>
        <div className="right">
          <Lottie
            className="growthAnimation"
            animationData={growthAnimation}
            speed={0.5}
            loop={false}
          />
        </div>
      </section>

      {/* Review Section */}
      <div className="reviewSection">
        <div className="left">
          <h1>Trusted by Many  Happy Customer</h1>
          <p>Based on 113 reviews</p>
        </div>
        <div className="reviewContainer">
          <IoArrowBackCircleOutline className="icons" />
          <div className="reviewsList">
            <div className="reviewCard">
              <div className="cardHeader">
                <div className="userDetail">
                  <figure>
                    <img src={profilepic} alt="star" />
                  </figure>
                  <div className="name-date">
                    <h6>Viezh Robert</h6>
                    <p>11 july</p>
                  </div>
                </div>

                <div className="rating">
                  <span>4.5</span>
                  <img src={star} />
                </div>
              </div>

              <div className="comment">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>
            </div>
            <div className="reviewCard">
              <div className="cardHeader">
                <div className="userDetail">
                  <figure>
                    <img src={profilepic} alt="star" />
                  </figure>
                  <div className="name-date">
                    <h6>Viezh Robert</h6>
                    <p>11 july</p>
                  </div>
                </div>

                <div className="rating">
                  <span>4.5</span>
                  <img src={star} />
                </div>
              </div>

              <div className="comment">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>
            </div>
            <div className="reviewCard">
              <div className="cardHeader">
                <div className="userDetail">
                  <figure>
                    <img src={profilepic} alt="star" />
                  </figure>
                  <div className="name-date">
                    <h6>Viezh Robert</h6>
                    <p>11 july</p>
                  </div>
                </div>

                <div className="rating">
                  <span>4.5</span>
                  <img src={star} />
                </div>
              </div>

              <div className="comment">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>
            </div>
          </div>
          <IoArrowForwardCircleOutline className="icons" />
        </div>
      </div>

      {/* Working Process */}
      <div className="workingProcess">
        <h1>How it works</h1>

        <div className="cardContainer">
          <div className="card">
            <figure>
              <img src={workingProcessTalk} alt="advice" />
            </figure>
            <div className="cardContent">
              <h2>Consult Our Experts</h2>
              <p>
                Talk to our accounting team to determine if you meet the
                criteria for tax rebates and CIS returns.{" "}
              </p>
            </div>
          </div>

          <div className="divider">
            <img src={arrow} alt="divider" />
          </div>

          <div className="card">
            <figure>
              <img src={workingProcessHandle} alt="handle" />
            </figure>
            <div className="cardContent">
              <h2>Leave the Work to Us</h2>
              <p>
                Our team of expert accountants will handle your rebate
                processing with HMRC, ensuring a smooth and efficient
                experience.
              </p>
            </div>
          </div>

          <div className="divider">
            <img src={arrow} alt="arrow" />
          </div>
          <div className="card">
            <figure>
              <img src={wokringProcessPaid} alt="getpaid" />
            </figure>
            <div className="cardContent">
              <h2>Get Your Rebate Fast</h2>
              <p>
                We transfer your rebate to you as soon as we receive it from
                HMRC, ensuring a swift and seamless process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CIS Services */}


      {/* General Services */}
      <section className="services">
        <div className="card">
          <div className="cardContent">
            <h2>What Can You Claim for with CISAssist?</h2>
            <p>
              At CISAssist, our expertise covers a range of claims, including
              <strong>
                {" "}
                travel expenses, accommodation, clothing & uniform, tools &
                equipment, and training
              </strong>{" "}
              — and more.
            </p>
            <p>
              Discover what you might be entitled to with our professional
              assistance.
            </p>
            <button>
              <strong onClick={navigateToClaim}>Speak with Our Experts</strong>
            </button>
          </div>

          <figure>
            <img src={whatucanclaim} alt="claim" />
          </figure>
        </div>
        <div className="card card2">
          <figure>
            <img src={speaktoteam} alt="connect to team" />
          </figure>

          <div className="cardContent">
            <h2>Minimize Claims Management</h2>
            <p>
              CISAssist is dedicated to minimize the stress and maximize rebate
            </p>
          </div>
        </div>
        <div className="card">
          <div className="cardContent">
            <h2>Get Your Rebate Fast</h2>
            <p>
              At CISAssist, we handle claims for various expenses, including
              travel, accommodation, clothing & uniforms, tools & equipment, and
              training.
            </p>

            <button onClick={navigateToClaim}>
              <strong>Make a claim</strong>
            </button>
          </div>
          <figure>
            <img src={accessrebate} alt="access rebate" />
          </figure>
        </div>
        {/* <div className="card">
          <figure>
            <img src={moneysecure} alt="Secure Data" />
          </figure>

          <div className="cardContent">
            <h2>Your Money and Data Are Safe</h2>
            <p>
              Protecting your data is a top priority at CISAssist. Our advanced
              technology and robust processes ensure your information is secure
              while our qualified accountants handle everything with HMRC for
              you.
            </p>
          </div>
        </div> */}

        {/* <div className="card">
          <div className="cardContent">
            <h2>Easy Rebate Tracking</h2>
            <p>
              With CISAssist, tracking your rebate is straightforward. Receive
              weekly updates on our progress with HMRC so you’re always
              informed.
            </p>

            <button onClick={navigateToClaim}>
              <strong>Start Your Claim</strong>
            </button>
          </div>
          <figure>
            <img src={trackrebate} alt="Track Rebate" />
          </figure>
        </div> */}

        {/* <div className="card">
          <figure>
            <img src={dedicatedaccountmanager} alt="Dedicated Manager" />
          </figure>

          <div className="cardContent">
            <h2>Your Personal Accounting Consultant</h2>
            <p>
              CISAssist provides you with a dedicated accounting consultant who
              is available anytime to assist you, at no extra cost.
            </p>
          </div>
        </div> */}
      </section>

      <div className="ourServices">

<h1>What can you claim for?</h1>

<div className="serviceContainer"> 
  <div className="left">
  <figure>
<img src={eligibleImage} />
</figure>
  </div>

  <div className="right">
    <div className="card">
      <div className="left">
      <figure>
        <img src={basic} alt="Fuel & Travel Expenses" />
      </figure>
      </div>
      <div className="right">
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Up to £2500 rebate</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>£150 plus VAT upfront</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>£200 plus VAT from rebate</label>
      </div>
     
    
    
      </div>
     
    
    </div>
    <div className="card">
      <div className="left"> <figure>
        <img src={standard} alt="food" />
      </figure></div>
      <div className="right">

      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Ideal for emailed expenses and CSV bank statements</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Up to £4,500 rebate</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>£250 plus VAT upfront, or £350 plus VAT from rebate</label>
      </div>
      {/* <p>Ideal for emailed expenses and CSV bank statements</p>
      <p>Up to £4,500 rebate</p>
      <p>£250 plus VAT upfront, or £350 plus VAT from rebate</p> */}
      
      
      
      </div>
     
    
    </div>
    <div className="card">
      <div className="left">  <figure>
        <img src={rebateplus} alt="Accommodation" />
      </figure></div>
      <div className="right">
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>For scanned expenses or PDF bank statements</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Up to £4,500 rebate</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>£300 plus VAT upfront, or £400 plus VAT from rebate</label>
      </div>
     
      
      </div>
    
      
    </div>
    <div className="card">
      <div className="left"> <figure>
        <img src={premium} alt="tool" />
      </figure></div>
     
     <div className="right">
     <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Comprehensive expense management</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Customized pricing based on needs</label>
      </div>
      <div className="criteria">
        <figure>
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="40" cy="40" r="40" fill="#FF6E41" />
            <path
              d="M51.8916 58.9899C51.563 58.9913 51.239 58.9139 50.9466 58.7642L40.4692 53.2863L29.9918 58.7642C29.6516 58.9429 29.268 59.0227 28.8846 58.9945C28.5013 58.9662 28.1336 58.8312 27.8232 58.6046C27.5129 58.3781 27.2725 58.0691 27.1292 57.7129C26.986 57.3567 26.9457 56.9675 27.0129 56.5895L29.0673 45.0387L20.6032 36.832C20.3392 36.5689 20.1518 36.2388 20.0613 35.8774C19.9709 35.5159 19.9806 35.1367 20.0896 34.7804C20.2087 34.4157 20.4277 34.0917 20.7219 33.8451C21.016 33.5985 21.3735 33.4392 21.7537 33.3852L33.4637 31.6824L38.6202 21.1574C38.7885 20.8105 39.0511 20.5179 39.3781 20.3133C39.7051 20.1086 40.0833 20 40.4692 20C40.8551 20 41.2332 20.1086 41.5602 20.3133C41.8873 20.5179 42.1499 20.8105 42.3181 21.1574L47.5363 31.6618L59.2463 33.3647C59.6265 33.4187 59.984 33.578 60.2781 33.8246C60.5723 34.0712 60.7913 34.3952 60.9104 34.7599C61.0194 35.1162 61.0291 35.4954 60.9387 35.8569C60.8482 36.2183 60.6608 36.5483 60.3968 36.8115L51.9327 45.0181L53.9871 56.569C54.0604 56.9536 54.022 57.3512 53.8764 57.7147C53.7308 58.0783 53.484 58.3926 53.1653 58.6206C52.7933 58.881 52.3454 59.0109 51.8916 58.9899Z"
              fill="#FF6E41"
            />
            <path
              d="M37.755 45.8036L33.205 41.4453C32.9317 41.1835 32.9317 40.759 33.205 40.4971L34.1949 39.5489C34.4683 39.287 34.9115 39.287 35.1849 39.5489L38.25 42.4848L44.8151 36.1964C45.0885 35.9345 45.5317 35.9345 45.8051 36.1964L46.795 37.1446C47.0683 37.4064 47.0683 37.831 46.795 38.0928L38.745 45.8036C38.4716 46.0655 38.0284 46.0655 37.755 45.8036Z"
              fill="white"
            />
          </svg>
        </figure>
        <label>Tailored support throughout the process</label>
      </div>
  
      
      </div>
     
    </div>
 
  </div>


</div>
</div>

      <div className="requestCallback">
        <div>
          <h1>Discover Your Potential Rebate</h1>
          <p>
            Schedule a call with our CIS and tax rebate experts to see how much
            you could claim.
          </p>
          <button onClick={navigateToClaim}>Book Your Free Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
