import './style.scss';
import Image from 'next/image';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className='d-flex flex-column gap-2'>
            <h6>Get our Mobile App</h6>
            <Image className='img-fluid' width={195} height={68} src={'/common/apple-store-02.svg'} alt='' />
            <Image className='img-fluid' width={195} height={68} src={'/common/playstore-01.svg'} alt='' />
            </div>
          </div>
          <div className="col-lg-3">
            <h6>Company</h6>
            <ul>
              <li>
                <a href="#">Argon Group</a>
              </li>
              <li>
                <a href="#">Argonflex</a>
              </li>
              <li>
                <a href="#">Argon Pay</a>
              </li>
              <li>
                <a href="#">Argon Payment Technologies</a>
              </li>
            </ul>
            </div>
          <div className="col-lg-3">
            <h6>Other Links</h6>
            <ul>
              <li>
                <a href="#">Privacy Statement</a>
              </li>
              <li>
                <a href="#">Compliance</a>
              </li>
              <li>
                <a href="#">Fraud Report</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
            </div>
          <div className="col-lg-3">
            <h6>Help</h6>
            <ul>
              <li>
                <a href="#">Visit Us</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Useful Links</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            </div>
        </div>
        <hr className='w-100 mb-4' />

        <div className='d-flex flex-lg-row justify-content-between'>
        <p className='mb-0'>Copyright © 2024 Argon Bank</p>
        <ul className='social-icons'>
          <li>
            <a href="#">
            <FaFacebookSquare className='fs-2 p-0' />
            </a>
          </li>
          <li>
            <a href="#">
            <FaSquareXTwitter className='fs-2 p-0' />
            </a>
          </li>
          <li>
            <a href="#">
            <FaLinkedin className='fs-2 p-0' />
            </a>
          </li>
          <li>
            <a href="#">
            <FaSquareInstagram className='fs-2 p-0' />
            </a>
          </li>
        </ul>
        </div>

      </div>
    </div>
  );
};
export default Footer;
