'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

function Header() {
  return (
    <div>
        <nav>
            <div className='logo'>
                <Image src={logo} alt='logo' width={40} />
                <h2>Logo</h2>
                <ul className='nav-items'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Section</a>
                    </li>
                    <li>
                        <a href="#">Section two</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header