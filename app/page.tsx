'use client';

import styled from 'styled-components';
import Header from './Components/Header/Header';
import SectionLayout from './Components/SectionLayout';
import Card from './Components/Card';
import { cards } from './utils/cards';
import FullPage from './Components/FullPage';

export default function Home() {
	return (
		<>
			<Header />
			<MainStyled>
				<SectionLayout>
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
				</SectionLayout>
				<FullPage />
				<SectionLayout>
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
				</SectionLayout>
			</MainStyled>
		</>
	);
}

const MainStyled = styled.main`
	min-height: 100vh;
	width: 100%;

	.cards {
		display: grid;
		grid-template-columns: repeat(5, 30rem);
		gap: 4rem;
	}
`;
