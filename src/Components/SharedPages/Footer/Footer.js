/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../../../assets/images/logo.png'
import footerBackground from '../../../assets/images/footer.png'
const Footer = () => {
  return (
<footer style={{background: `url(${footerBackground})`,backgroundSize:'cover'}}>
  <div className="footer p-10 text-base-content text-center">
    <div className="flex"><img className="mx-auto my-auto" src={logo} width="50" height="50" alt="Logo" />
    <div className="mx-auto my-auto md:text-xl text-zinc-500 md:font-bold"><p>Functional Neurosurgeons</p><p>The Best Functional Neurosurgeons of Our Country.</p></div>
  </div> 
  <div className="mx-auto my-auto">
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Epilepsy and Seizures</a> 
    <a className="link link-hover">Brain Tumors</a> 
    <a className="link link-hover">Parkinson's Disease (PD)</a> 
    <a className="link link-hover">Spine Surgery</a>
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
  </div>
  <p className="mb-6 mt-6 text-center">Copyright &#169; {new Date().getFullYear()} - All right reserved</p>
</footer>
  );
};

export default Footer;
