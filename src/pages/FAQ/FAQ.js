import React from "react";
import "./FAQ.scss";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddRoundedIcon from '@mui/icons-material/AddRounded';


const FAQ = () => {
  return (
    <div className="faq">

<div className="heroSection"
>

<h1>Frequently asked questions</h1>
<p>Tax rebates can be bewildering. Our mission at TaxHoot is to use our knowledge and experience to provide a no-jargon, simple tax rebate experience.</p>


</div>
<div className="accordianSection">

      <Accordion>
        <AccordionSummary
          expandIcon={<AddRoundedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What’s the difference between a tax return and a tax rebate?
        </AccordionSummary>
        <AccordionDetails>
          A tax return is a form you use to tell HMRC about your earnings and
          expenses. It’s a complete overview of the taxable income you’ve made
          and the costs of doing business you’ve faced. A tax refund is money
          HMRC gives back when you’ve paid too much tax. There are several
          reasons why you might overpay, and you often have to file a claim and
          prove you did.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
                   expandIcon={<AddRoundedIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Am I due a rebate?
        </AccordionSummary>
        <AccordionDetails>
          Rebates from HMRC to those who have paid too much tax, specifically
          relating to their work related expenses. HMRC states a tax rebate is
          “a refund on taxes when the liability is less than the taxes paid”. If
          you drive for work, and your employer isn’t fully reimbursing you for
          this travel, then you’re entitled to a tax rebate. HMRC does not
          automatically refund overpaid tax for work related expenses, which
          means you need to claim it back. And what’s more, you can only claim
          for the past four years. As well as business travel, taxpayers can
          claim for a variety of expenses including clothing and uniforms,
          accommodation, tools, travel, training and much more. Our accounting
          team can support you to explore your options with a short telephone
          call
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
                   expandIcon={<AddRoundedIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How much am I entitled to claim?
        </AccordionSummary>
        <AccordionDetails>
          This depends on your circumstances. You can claim back to the previous
          four tax years with average rebates being over £3,000 and some clients
          securing over £10,000. Our dedicated accounting team will be able to
          evaluate your eligibility after a 15-minute call and can provide an
          estimate there and then. Reach out to us to set that call up.
        </AccordionDetails>
      
      </Accordion>
      <Accordion>
        <AccordionSummary
                   expandIcon={<AddRoundedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How long does it take to get my rebate?
        </AccordionSummary>
        <AccordionDetails>
          We’re all about speed at TaxHoot, and we communicate the process to
          you on a weekly basis. It generally takes a few weeks for us to
          collect all of the required information to support your claim, most of
          this we do directly with HMRC. Once we’ve submitted the claim to HMRC
          it typically takes them around 8-10 weeks to process. As soon as we
          receive the rebate, we will pay this directly into your bank account,
          minus our fee.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
                   expandIcon={<AddRoundedIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What if my employer already pays me the allowance?
        </AccordionSummary>
        <AccordionDetails>
          You’re only eligible to claim up to 45p per mile for the first 10,000
          miles and then 25p per mile for the remaining miles. However you can
          claim this back over the previous 4 tax years, so you may be eligible
          if your previous employers haven’t fully reimbursed this allowance.
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
                 expandIcon={<AddRoundedIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Can I claim a tax rebate for a company car?
        </AccordionSummary>
        <AccordionDetails>
          Yes, you can apply for a rebate for travel expenses in any vehicle
          you’ve driven
        </AccordionDetails>
       
      </Accordion>
      <Accordion>
        <AccordionSummary
                  expandIcon={<AddRoundedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What if my employer already pays me the allowance?
        </AccordionSummary>
        <AccordionDetails>
          You’re only eligible to claim up to 45p per mile for the first 10,000
          miles and then 25p per mile for the remaining miles. However you can
          claim this back over the previous 4 tax years, so you may be eligible
          if your previous employers haven’t fully reimbursed this allowance.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
                  expandIcon={<AddRoundedIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Can I claim a tax rebate for a company car?
        </AccordionSummary>
        <AccordionDetails>
          Yes, you can apply for a rebate for travel expenses in any vehicle
          you’ve driven.
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
                  expandIcon={<AddRoundedIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How do I claim a tax rebate from HMRC?
        </AccordionSummary>
        <AccordionDetails>
          TaxHoot are industry experts in supporting taxpayers to claim their
          overpaid tax back from HMRC. Our accounting team can support you to
          explore your options with a short telephone call at no cost.
        </AccordionDetails>
       
      </Accordion>
      <Accordion>
        <AccordionSummary
                   expandIcon={<AddRoundedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Can I claim for miles driven in an electric car?
        </AccordionSummary>
        <AccordionDetails>
          Yes, this is because there is a cost to you when you charge and drive
          an electric vehicle. Our accounting team can help you calculate this
          cost.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
                   expandIcon={<AddRoundedIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          What if I don’t have all of my pay or tax paperwork ?
        </AccordionSummary>
        <AccordionDetails>
          Don’t have your paperwork? No stress, TaxHoot has got your back. We’ve
          built technology to capture this from HMRC to make tax rebates simple,
          transparent and fast for our customers.
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
                   expandIcon={<AddRoundedIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How many miles can I apply for?
        </AccordionSummary>
        <AccordionDetails>
          You can apply for a tax rebate for all work related miles. Our
          accounting team can help you to accurately calculate the correct
          amount owed to you.
        </AccordionDetails>
       
      </Accordion>

      <Accordion>
        <AccordionSummary
                 expandIcon={<AddRoundedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         What is HMRC’s mileage tax allowance?

        </AccordionSummary>
        <AccordionDetails>
        HMRC have a recommended tax allowance of up to 45p per mile for the first 10,000 miles (cars/vans) and 24p per mile for motorcycles.  Most employers should pay this as an expense to employees, but aren’t aware of the scheme or do not pay the full amount. 

TaxHoot helps taxpayers to claim back their correct mileage allowance.
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
                  expandIcon={<AddRoundedIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
      Do you have a referral scheme?
        </AccordionSummary>
        <AccordionDetails>
        We sure do, we want our customers to tell their friends, family, colleagues and connections about how great we are.

For every person you refer that goes on to get a tax rebate through TaxHoot, we will transfer £100 straight into your bank account. If you successfully refer 20 people, we will send you an additional £200 bonus! 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
                    expandIcon={<AddRoundedIcon  />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
    How much does TaxHoot charge?
        </AccordionSummary>
        <AccordionDetails>
        Our service is no win, no fee, with no upfront payment. For successful rebates claimed back from HMRC we charge 30% +VAT of the rebate figure at the point it’s paid to you. 
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
