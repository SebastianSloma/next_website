'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImagePage = () => {
	const images = React.useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: images,
		offset: ['start end', 'end start'],
	});

	const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
	const scale = useTransform(
		scrollYProgress,
		[0, 0.6, 0.8, 0.9],
		[1, 0.8, 0.8, 0]
	);

	return (
		<ImagesPageStyled>
			<motion.div
				className='image'
				ref={images}
				style={{
					opacity,
					scale,
				}}>
				<Image 
            src='/images/london.jpeg'
            alt='quote'
            fill={true}
            style={{
                objectFit:'cover',
                objectPosition:'center'
            }}
            />
			</motion.div>
		</ImagesPageStyled>
	);
};

const ImagesPageStyled = styled.div`
.image {
    width: calc(100% - 10rem);
    height: 1000px;
  
    position: relative;
    border-radius: 1rem;
    border-radius: 8px;
  
    border: 1px solid var(--color-border);
    transition: border 0.3s ease-in-out;
  
    img {
      padding: 1.5rem;
    }
  
    &:hover {
      border: 1px solid #f2994a;
    }
  }
`;

export default ImagePage;
