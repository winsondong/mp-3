import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import { DynamicTitle } from "../components/DynamicTitle";

import { 
    StyledContainer,
    StyledMain,

    SectionTitle,
    SectionContainer, 
    SectionHeading, 
    StyledList, 
    StyledListItem,

} from "../StyledComponents"


export function Skills() {
  return (
    <>  
        <DynamicTitle />
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
            <SectionTitle><strong>Skills</strong></SectionTitle>

            <SectionContainer>
                <SectionHeading>Languages</SectionHeading>
                <StyledList>
                    <StyledListItem>Python</StyledListItem>
                    <StyledListItem>Java</StyledListItem>
                    <StyledListItem>JavaScript/HTML/CSS</StyledListItem>
                    <StyledListItem>Typescript</StyledListItem>
                </StyledList>
            </SectionContainer>

            <SectionContainer>
                <SectionHeading>Frameworks and Libraries</SectionHeading>
                <StyledList>
                    <StyledListItem>React.js</StyledListItem>
                    <StyledListItem>Django</StyledListItem>
                    <StyledListItem>Flask</StyledListItem>
                    <StyledListItem>Pandas</StyledListItem>
                    <StyledListItem>NumPy</StyledListItem>
                </StyledList>
            </SectionContainer>

            <SectionContainer>
                <SectionHeading>Tools</SectionHeading>
                <StyledList>
                    <StyledListItem>Git</StyledListItem>
                    <StyledListItem>Docker</StyledListItem>
                    <StyledListItem>LaTeX/Overleaf</StyledListItem>
                    <StyledListItem>MS Excel</StyledListItem>
                </StyledList>
            </SectionContainer>

        </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
}
