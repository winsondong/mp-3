import { Link } from "react-router-dom";
import styled from "styled-components";

import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import { DynamicTitle } from "../components/DynamicTitle";

import { StyledMain, StyledContainer, SectionTitle } from "../StyledComponents";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
`;

const HomeImage = styled.img`
  width: 65%;
  margin: 0 0 3% 0;
  border-radius: 2vh;
  box-shadow: 0px calc(2px + 0.3vw) calc(6px + 0.5vw) black;
`;

const HomeParagraph = styled.p`
  font-size: calc(10px + 1vw);
  padding: 0 3vw;
  text-indent: 2em;
`;

const HomeLink = styled(Link)`
  color: #00acfb;
`;


export function Home() {
  return (
      <>
        <DynamicTitle />
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
            <SectionTitle><strong>Home</strong></SectionTitle>
                <HomeContainer>
                    <HomeImage src="/imgs/winson.jpg" alt="Winson Dong" />
                    <HomeParagraph>
                        <strong>Hi, my name is Winson Dong from Mount Sterling, Kentucky. I'm passionate about software engineering, especially full-stack development, and always looking to expand my skills. Outside of coding, I enjoy lifting weights and am a huge basketball fan, with the Lakers being my favorite team because of LeBron James.</strong>
                    </HomeParagraph>
                    <HomeParagraph><em>Welcome to my website! Here, you will find details about my <HomeLink to="/education/">Education</HomeLink>, <HomeLink to="/experiences">Experiences</HomeLink>, <HomeLink to="/projects">Projects</HomeLink>, <HomeLink to="/skills">Skills</HomeLink>, and <HomeLink to="/contact">Contact</HomeLink> information!</em></HomeParagraph>

                </HomeContainer>
        </StyledMain>
        </StyledContainer>

  
        <Footer />
      </>
  );
}
