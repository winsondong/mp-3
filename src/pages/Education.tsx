import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import { 
    StyledContainer,
    StyledMain,

    SectionTitle,
    SectionContainer, 
    SectionHeading, 
    CourseworkContainer, 
    CourseworkHeading, 
    StyledList, 
    StyledListItem, 
    StyledParagraph 

} from "../StyledComponents"


export function Education() {
  return (
    <>  
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
            <SectionTitle><strong>Education</strong></SectionTitle>
            <SectionContainer>
                <SectionHeading>Boston University | Boston, MA</SectionHeading>
                <StyledParagraph><strong>Class of 2026</strong></StyledParagraph>
                <StyledParagraph><strong>Major:</strong> Computer Science</StyledParagraph>

                <CourseworkContainer>
                    <CourseworkHeading>Relevant Coursework:</CourseworkHeading>
                    <StyledList>
                        <StyledListItem>Data Structures & Algorithms</StyledListItem>
                        <StyledListItem>Artificial Intelligence</StyledListItem>
                        <StyledListItem>Machine Learning</StyledListItem>
                        <StyledListItem>Web Development</StyledListItem>
                        <StyledListItem>Computer Systems</StyledListItem>
                        <StyledListItem>Software Engineering</StyledListItem>
                    </StyledList>
                </CourseworkContainer>
            </SectionContainer>

            <SectionContainer>
                <SectionHeading>Sayre School | Lexington, KY</SectionHeading>
                    <StyledParagraph><strong>Class of 2022</strong></StyledParagraph>
                    <StyledParagraph><strong>GPA: 4.38</strong></StyledParagraph>
                    <StyledParagraph><strong>Dean's List:</strong> Recognized for outstanding academic performance</StyledParagraph>
            </SectionContainer>
        </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
}
