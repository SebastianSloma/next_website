'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import logo from '/public/images/logo.png'

const Footer = () => {
  return (
    <FooterStyled>
        <nav>
            <div className="logo-con">
                <div className="logo">
                    <Image src={logo} alt='logo' width={36}/>
                    <h2>Logo</h2>
                </div>
            </div>
        </nav>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`

`

export default Footer