import styled from 'styled-components';
import Header from './Components/Header/Header';
import SectionLayout from './Components/SectionLayout';

export default function Home() {
	return (
		<>
			<Header />
			<MainStyled>
				<SectionLayout>
					
				</SectionLayout>
			</MainStyled>
		</>
	);
}

const MainStyled = styled.main`
min-height: 100vh;
width: 100%;
`;
