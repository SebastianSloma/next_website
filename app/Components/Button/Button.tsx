'use client';

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
	name: string;
	icon?: string;
	background?: string;
	color?: string;
	border?: string;
}
function Button({ name, icon, background, color, border }: ButtonProps) {
	return (
		<ButtonStyled
			style={{ background: background, color: color, border: border }}>
			{icon && icon}
			{name}
		</ButtonStyled>
	);
}

const ButtonStyled = styled.button`
padding: 0.8rem 2rem;
border-radius: 30px;
border:2px solid var(--color-border)
cursor: pointer:
transition: all 0.3s ease-in-out
display:flex;
align-items: center
gap: 1rem;
&:hover{
    background-color: var(--color-border)
    color:white;
}
`;

export default Button;
