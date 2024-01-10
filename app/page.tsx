'use client';

import styled from 'styled-components';
import Header from './Components/Header/Header';
import SectionLayout from './Components/SectionLayout';
import Card from './Components/Card';
import { cards } from './utils/cards';
import FullPage from './Components/FullPage';
import TextSection from './TextSection';
import Footer from './Components/Footer';
import ZoomSection from './Components/ZoomSection';
import HorizontalWrapper from './Components/HorizontalWrapper';

export default function Home() {
	return (
		<>
			<Header />
			<MainStyled>
				<SectionLayout>
					<HorizontalWrapper height='40rem' direction={-1400}>
						<div className='cards'>
							{cards.map((card, index) => {
								return (
									<Card
										key={index}
										title={card.title}
										description={card.description}
										image={card.image}
									/>
								);
							})}
						</div>
					</HorizontalWrapper>
				</SectionLayout>

				<FullPage />

				<SectionLayout>
					<HorizontalWrapper height='40rem' direction={-1400}>
						<div className='cards' style={{ right: 0 }}>
							{cards.map((card, index) => {
								return (
									<Card
										key={index}
										title={card.title}
										description={card.description}
										image={card.image}
									/>
								);
							})}
						</div>
					</HorizontalWrapper>
				</SectionLayout>

				<SectionLayout>
					<TextSection />
				</SectionLayout>

				<SectionLayout>
					<div className='video'>
						<iframe
							src='https://www.youtube.com/watch?v=JS5iRAxJ-0M'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen></iframe>
					</div>
				</SectionLayout>

				<SectionLayout>
					<TextSection />
				</SectionLayout>

				<SectionLayout>
					<ZoomSection />
				</SectionLayout>

				<Footer />
			</MainStyled>
		</>
	);
}

const MainStyled = styled.main`
	min-height: 100vh;
	width: 100%;

	.cards {
		position: absolute;
		display: grid;
		grid-template-columns: repeat(5, 30rem);
		gap: 4rem;
	}

	.video {
		padding: 2rem;
		background-color: #161616;
		border-radius: 1rem;
		iframe {
			border: none;
			width: 100%;
			height: 52rem;
		}
	}
`;
