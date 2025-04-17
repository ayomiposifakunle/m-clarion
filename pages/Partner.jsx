import React from 'react'
import Nav from '../components/Nav';
import Foot from '../components/Foot';
import FAQC from '../components/FAQC';
import ContactUsComp from '../components/ContactUsComp';

const Partner = () => {
  return (
    <div>
      <Nav />  
 <ContactUsComp title="REGISTER TO BE A PARTNER"
 placeholder1="Title"
 placeholder2="First Name"
 placeholder3="Last Name"
 placeholder4="Company Name"
 placeholder5="Address"
 placeholder6="City"
 placeholder7="Country"
 placeholder8="Email"
 placeholder9="Phone"
 placeholder10="Comment"
 />
    <section className="bg-[#FF0099] text-white">
   <FAQC />
</section>

<Foot />
    </div>
  )
}

export default Partner
