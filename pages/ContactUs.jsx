import React from 'react'
import Nav from './../components/Nav';
import Foot from './../components/Foot';
import ContactUsComp from './../components/ContactUsComp';

const ContactUs = () => {
  return (
    <div>
      <Nav />

<ContactUsComp title="CONTACT US" text="Thank you for your interest in partnering with us! To apply, please fill this form and a representative from our Business Development Department will contact you shortly."
placeholder1="Title"
placeholder2="First Name"
placeholder3="Last Name"
placeholder4="Company Name"
placeholder5="Address"
placeholder6="City"
placeholder7="Country"
placeholder8="Email"
placeholder9="Phone"
placeholder10="Why do you want to partner with M-clarion"
/>
      <Foot />
    </div>
  )
}

export default ContactUs
