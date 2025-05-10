import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <Link to='/' onClick={scrollToTop}><img src={assets.logo} className='mb-5 w-32' alt="" /></Link>
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sed eius officia! Fuga corporis est blanditiis necessitatibus, reiciendis dolore ratione?
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><Link to='/' onClick={scrollToTop}>Home</Link></li>
                    <li><Link to='/about' onClick={scrollToTop}>About us</Link></li>
                    <li><Link>Delivery</Link></li>
                    <li><Link>Privacy policy</Link></li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+44-1234567</li>
                    <li>contact@showup.com</li>
                </ul>
            </div>

        </div>

        <div >
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ shopup.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer