import React,{useRef, useState} from 'react'
import "./ReferAfriend.scss"
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import heroimage from "../../Assest/Group 9154.png"
import profilepic from "../../Assest/male-female-office-workers.jpg"
import star from "../../Assest/Frame 54.png"
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LockPersonRoundedIcon from "@mui/icons-material/LockPersonRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import CallIcon from "@mui/icons-material/Call";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);


const ReferAfriend = () => {
  const [loader,setLoader] = useState(false)
  useGSAP(()=>{
    
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


    // gsap.fromTo(".cardContainer", {
    //   x: "100%",
    //   opacity: 0,
    // }, {
    //   x: "0",
    //   duration: 1.5,
    //   opacity: 1,
    //   ease: "power3.inOut",
    //   scrollTrigger: {
    //     trigger: '.blackBox',
    //     start: "top bottom",
    //     end: "bottom top"
    //   }
    // });
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.fromTo(card, {
        opacity: "0"
      }, {
        opacity: 1,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top"
        }
      });
    })

  })



  const form = useRef();

  const sendEmail = (e) => {
    setLoader(true)
    e.preventDefault();

    emailjs
      .sendForm('service_e0d3s2m', 'template_ue9pm0h', form.current, {
        publicKey: 'SVHejchWMbnmGSuZQ',
      })
      .then(
        () => {
          setLoader(false)
          toast.success('Your Response has been recorded Successfully!')
         
          form.current.reset(); 
        },
        (error) => {
          setLoader(false)
          toast.error('Server Error! Please try again after sometime!')
          console.log(error)
        },
      );
  };
















  return (
    <div className='referAfriend'>
    <div className='heroSection'>

<div className='left'>

<h1>Refer your <span>friends </span>to <span>earn </span>more</h1>
<p>Every time you refer a friend who successfully secures a rebate, we will transfer £100 directly to your bank account.
<br/>
<br/>
Plus anyone can refer, so why not start now!
  </p>

  <form  ref={form} onSubmit={sendEmail}  >
  <header>
    <h2>Your details.</h2>
  </header>
  <div className="wrapper">
                <Person2RoundedIcon className="inputIcon" />
                <input
                  className="input100"
                  type="text"
                  placeholder="Username"
                  required
                  name='name'
                />
              </div>
              <div className="wrapper">
                <EmailRoundedIcon className="inputIcon" />
                <input name='enail'   type="text" placeholder="Email" required />
              </div>
              <div className="wrapper">
                <CallIcon className="inputIcon" />
                <input name='phone'  type="number" placeholder="Phone Number" required />
              </div>
  
 


  <header>
    <h2>Your friends details</h2>
  </header>
  <div class="wrapper">
  <Person2RoundedIcon className="inputIcon" />
    <input   name='friend_name' type="text" placeholder="'Referred by' First Name*" required/>

  </div>
  <div class="wrapper">
  <EmailRoundedIcon className="inputIcon" />
    <input   name='friend_email' type="email" placeholder="'Referred by' Email*" required/>
  </div>
  <div class="wrapper">
  <CallIcon className="inputIcon" />
    <input  name='friend_phone'  type="number" placeholder="Referral Phone Number" required/>
  </div>
  <button type="submit" disabled={loader}>
        {loader ? 'Submitting...' : 'Submit'}
      </button>
 
</form>

</div>


<div className='right'>

<div className='companyInfo'>

<figure>
  <img src={heroimage} />
</figure>




<div className='aboutCompany'>
  <h1>CONTACT US </h1>
  <h4>Feel free to get in touch & We'll get back to you</h4>

<div className='companyContainer'>
<div className='ceo'>




<p>CEO , <strong>CISAssist</strong></p>

<div className='wrapper'>
<div className='phone'><LocalPhoneRoundedIcon/><span><a href="tel:03700420203">Tel : 03700420203</a></span></div>
<div className='email'><MailOutlineRoundedIcon/><span><a href="Assist@cisassist.com">Email: Assist@cisassist.com</a></span></div>


  
  </div>



</div>
{/* <div className='office'>

<h4>Our Office</h4>

<div className='address'>
<PlaceRoundedIcon/>
<p>TaxHoot<br/>
30 Churchill Place,<br/>
Canary Wharf,<br/>
London E14 5EU
</p>


</div>



</div> */}
</div>
{/* <figure className='map'>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.428178097917!2d-0.024621511144755737!3d51.505360138183825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b0a1266417%3A0x8816199b3209b78f!2sCanary%20Wharf!5e0!3m2!1sen!2sin!4v1721928776591!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</figure> */}


</div>

</div>









</div>





    </div>

{/* <div className='reviewSection'>

<h1>
  Our Top Reviews
</h1>


<div className='cardWrapper'>


<div className='reviewCard'>

<header>

<h4>Excelent</h4>
<figure><img src={star}/></figure>

</header>

<div className='comment'>
Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher
</div>
<div className='userDetail'>

<figure>
<img src={profilepic}/>
</figure>
<div className='name'>Mark <span>11 july</span>   </div>

</div>

</div>





</div>
<div class="navigation-button">
  <span class="dot" ></span>
  <span class="dot" ></span>
  <span class="dot" ></span>
</div>

</div> */}
</div>
  )
}

export default ReferAfriend