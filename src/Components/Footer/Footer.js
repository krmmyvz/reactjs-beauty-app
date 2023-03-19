import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

export default function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='col col-1'>
          <div className='row row-1'>
            <h1>URBAN</h1>
            <p> We provide beauty and treatment services
              with best quality, believe us.
            </p>
            <a href='mailto::talk@urban.com'>talk@urban.com</a>
          </div>

          <div className='row row-2'>
            <h4>About</h4>
            <ul>
              <li>
                <Link to="/" >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" >
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" >
                  News
                </Link>
              </li>
              <li>
                <Link to="/" >
                  Carrers
                </Link>
              </li>
            </ul>
          </div>

          <div className='row row-3'>
            <h4>Product</h4>
            <ul>
              <li>
                <Link to="/" >
                  New Arrival
                </Link>
              </li>
              <li>
                <Link to="/" >
                  Discount
                </Link>
              </li>
              <li>
                <Link to="/" >
                  Customize
                </Link>
              </li>

            </ul>
          </div>

          <div className='row row-4'>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/" >
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/" >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/" >
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className='row row-5'>
            <h4>Connect with Us</h4>
            <div class="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><HiArrowNarrowRight /></button>
              </form>
            </div>

          </div>

        </div>
        <div className='col col-2'>
          <span>
            Copyright, Urban 2023, All rights reserved.
          </span>
          <div className='logos'>
            <AiFillInstagram />
            <AiFillFacebook />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
        </div>
      </div>
    </>
  )
}

