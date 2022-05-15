import React from "react";
import logo from '../../../assets/images/logo.png'
import footerBackground from '../../../assets/images/footer.png'
const Footer = () => {
  return (
<footer style={{background: `url(${footerBackground})`,backgroundSize:'cover'}} className="footer p-10 text-base-content">
  <div className="flex"><img className="mx-auto my-auto" src={logo} width="50" height="50" alt="Logo" />
    <div className="mx-auto my-auto md:text-xl text-zinc-500 md:font-bold"><p>Functional Neurosurgeons</p><p>The Best Functional Neurosurgeons of Our Country.</p><p>Copyright &#169; {new Date().getFullYear()} - All right reserved</p></div>
  </div> 
  <div className="mx-auto my-auto">
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className="mx-auto my-auto">
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className="mx-auto my-auto">
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
  );
};

export default Footer;
