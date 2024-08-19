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


  const form = useRef();

  const [loader,setLoader] = useState(false)




const sendEmail = (e) => {
  setLoader(true)
  e.preventDefault();
  emailjs
    .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setLoader(false)
        form.current.reset();
        toast.success('Your Response has been recorded Successfully!')
      },
      (error) => {
        setLoader(false)
        toast.error('Server Error! Please try again after sometime!')
        console.log(error)
      },
    );
};










  return (
    <div className='makeAclaim'>
    <div className='heroSection'>

<div className='left'>

<h1>Make a claim</h1>
<p>Our average customer rebate is over £3,000.
  <br/>
  <br/>

Add your details below and one of our accounting consultants will contact you for a free 15-min call to discuss your rebate.
  </p>

  <form  ref={form} onSubmit={sendEmail}>
  <header>
    <h2>Send us your details and one
    of our team will be in touch today.</h2>
  </header>
  <div class="wrapper">
    <Person2RoundedIcon/>
    <input  className='input100' type="text" placeholder="Username" required/>
    <span className='focus-input100'></span>

  </div>
  <div class="wrapper">
  <EmailRoundedIcon/>
    <input type="text" placeholder="Email" required/>
  </div>
  <div class="wrapper">
  <LockPersonRoundedIcon/>
    <input type="password" placeholder="Password" required/>
  </div>
  <button type="submit">Submit</button>
 
</form>

</div>


<div className='right'>

<div className='companyInfo'>

<figure>
  <img src={heroimage} />
</figure>




<div className='aboutCompany'>

<div className='ceo'>

  <figure>
    <img src={profilepic}/>
  </figure>

  <h1>Mr.Hassan Magdy</h1>
  <p>CEO , ProCre</p>
 
  <div className='wrapper'>
  <div className='phone'><LocalPhoneRoundedIcon/><span><a href="tel:369 258 147">Tel : 369 258 147</a></span></div>
  <div className='email'><MailOutlineRoundedIcon/><span><a href="mailto:h@procrew.pro">Email: h@procrew.pro</a></span></div>


    
    </div>



</div>
<div className='office'>

  <h1>Our Office</h1>

 <div className='address'>
 <PlaceRoundedIcon/>
 <p>TaxHoot<br/>
  30 Churchill Place,<br/>
  Canary Wharf,<br/>
  London E14 5EU
</p>


 </div>
 

  <figure className='map'>

  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.428178097917!2d-0.024621511144755737!3d51.505360138183825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b0a1266417%3A0x8816199b3209b78f!2sCanary%20Wharf!5e0!3m2!1sen!2sin!4v1721928776591!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </figure>
</div>

</div>

</div>









</div>





    </div>

<div className='reviewSection'>

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

</div>
</div>
  )
}

export default MakeAclaim