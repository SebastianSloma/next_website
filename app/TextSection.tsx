'use client';

import React from 'react';
import styled from 'styled-components';

interface Props {
	children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
	const text = React.useRef<HTMLDivElement>(null);

	return (
		<div ref={text}>
			<p>{children}</p>
		</div>
	);
};

const TextSection = () => {
	return (
		<TextSectionStyled>
			<TextWrapper>
				Framer Motion is a simple yet powerful motion library for React.
			</TextWrapper>
			<TextWrapper>
				Framer Motion is a simple yet powerful motion library for React.
			</TextWrapper>
			<TextWrapper>
				Framer Motion is a simple yet powerful motion library for React.
			</TextWrapper>
			<TextWrapper>
				Framer Motion is a simple yet powerful motion library for React.
			</TextWrapper>
			<TextWrapper>
				Framer Motion is a simple yet powerful motion library for React.
			</TextWrapper>
			<TextWrapper>
				Framer Motion is a simple yet powerful motion library for React.
			</TextWrapper>
			<TextWrapper>
				Framer Motion is a simple yet powerful motion library for React.
			</TextWrapper>
		</TextSectionStyled>
	);
};

const TextSectionStyled = styled.section`
	p {
		font-size: 5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 3rem;
	}
`;

export default TextSection;
