'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import logo from '/public/images/logo.png'
import footer from '../utils/footer'
import { VscGithub } from "react-icons/vsc";
import { FaSquareXTwitter,FaSquareInstagram, FaDiscord  } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";




const Footer = () => {
  return (
    <FooterStyled>
        <nav>
            <div className="logo-con">
                <div className="logo">
                    <Image src={logo} alt='logo' width={36}/>
                    <h2>Logo</h2>
                </div>
                <div className="input">
                    <input type="text" placeholder='Subscribe here...' />
                    <button>&#8594</button>
                </div>
            </div>
        </nav>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`

`

export default Footer