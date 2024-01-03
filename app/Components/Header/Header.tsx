'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import Button from '../Button/Button';
import styled from 'styled-components';
import { FaRegHandPointer } from 'react-icons/fa';
import { MdOutlineRocketLaunch } from "react-icons/md";
import { Abril_Fatface } from 'next/font/google';

const abril = Abril_Fatface({
	subsets: ['latin'],
	weight: ['400'],
});

function Header() {
	return (
		<HeaderStyled>
			<nav>
				<div className='logo'>
					<Image src={logo} alt='logo' width={40} />
					<h2>Logo</h2>
				</div>
				<div className='input'>
					<input type='text' placeholder='Search' />
				</div>
				<ul className='nav-items'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Section</a>
					</li>
					<li>
						<a href='#'>Section two</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<Button name='Push button' icon={<FaRegHandPointer />} />
				</ul>
			</nav>
			<div className='header-content'>
				<div>
					<h1 className={abril.className}>Framer Motion Test</h1>
					<p>
						Production-ready declarative animations. A simple declarative syntax
						means you write less code. Less code means your codebase is easier
						to read and maintain.
					</p>
                    <div className='buttons'>
                    <Button name='Get Started' 
                    background='#f2994a'
                    color='#fff'
                    border='1px solid #f2994a'
                    icon={<MdOutlineRocketLaunch />}
                    /> 
                    <Button name='Read More'/>
                    </div>
				</div>
                <div className='image-content'>
                    <div className='image'>
                        <Image src='/images/anton.jpeg'
                        alt='hero'
                        width={600}
                        height={600}
                        />

                    </div>

                </div>
			</div>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	nav {
		padding: 0 4rem;
		min-height: 10vh;
		border-bottom: 1px solid var(--color-border);
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			display: flex;
			align-items: center;
			gap: 1rem;
			cursor: pointer;
		}
		.input {
			flex: 2;
			display: flex;
			justify-content: center;
			input {
				width: 55%;
				padding: 0.6rem 0.8rem;
				border-radius: 8px;
				background-color: #161616;
				border: 1px solid var(--color-border);
				&::placeholder {
					color: var(--color-border);
					font-weight: 500;
				}
			}
		}
		.nav-items {
			display: flex;
			align-items: center;
			gap: 2rem;
			li {
				transition: all 0.2s ease-in-out;

				&:hover {
					color: white;
					transform: scale(1.1);
				}
			}
		}
	}
`;

export default Header;
