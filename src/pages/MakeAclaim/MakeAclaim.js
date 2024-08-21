import React, { useRef, useState } from 'react'
import "./MakeAclaim.scss"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import heroimage from "../../Assest/Group 9154.png"
import profilepic from "../../Assest/male-female-office-workers.jpg"
import star from "../../Assest/Frame 54.png"
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import DescriptionIcon from '@mui/icons-material/Description';
import CallIcon from "@mui/icons-material/Call";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const MakeAclaim = () => {

  
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




  const [loader,setLoader] = useState(false)




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e0d3s2m', 'template_33wmxz2', form.current, {
        publicKey: 'SVHejchWMbnmGSuZQ',
      })
      .then(
        () => {
          toast.success('Your Response has been recorded Successfully!')
         
          form.current.reset(); 
        },
        (error) => {
          toast.error('Server Error! Please try again after sometime!')
          console.log(error)
        },
      );
  };










  return (
    <div className='makeAclaim'>
    <div className='heroSection'>

<div className='left'>

<h1>Make a <span>claim</span></h1>


  <form  ref={form} onSubmit={sendEmail}>
  <header>
    <h2>Send us your details and one
    of our team will be in touch today.</h2>
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
              <div className="wrapper">
                <DescriptionIcon className="inputIcon" />
                <textarea type="text" placeholder="Description" required />
              </div>
  <button type="submit">Submit</button>
 
</form>

</div>


<div className='right'>

<div className='companyInfo'>

<figure>
  <img src={heroimage} />
</figure>






</div>









</div>





    </div>


</div>
  )
}

export default MakeAclaim