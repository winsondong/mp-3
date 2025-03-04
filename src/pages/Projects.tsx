import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import { Calculator } from "../components/Calculator";

import {
    StyledBody, 
    StyledContainer,
    StyledMain,

    SectionTitle,
    SectionContainer, 
    SectionHeading, 
    StyledParagraph,
    StyledList, 
    StyledListItem, 

} from "../StyledComponents"




export function Projects() {
  return (
    <>  
        <StyledBody>
            <Header />
            <StyledContainer>
            <Nav />
            <StyledMain>
                <SectionTitle><strong>Projects</strong></SectionTitle>

                <SectionContainer>
                    <SectionHeading>NBA Dream Team Builder | Full-Stack Web Application</SectionHeading>
                    <StyledParagraph><strong>Jan 2025</strong></StyledParagraph>
                    <StyledParagraph>Engineered a dynamic web app using <strong>React (TypeScript)</strong> and <strong>Flask</strong>, enabling users to filter over <strong>400+ NBA players</strong> by position, team, and performance stats.</StyledParagraph>
                    <StyledList>
                        <StyledListItem>Built a <strong>RESTful API</strong> with <strong>Flask</strong> and <strong>Pandas</strong> to efficiently query and serve NBA player data from the 2016-17 season.</StyledListItem>
                        <StyledListItem>Enhanced UI/UX by implementing responsive design principles and interactive visualizations, improving user engagement and accessibility across devices.</StyledListItem>
                    </StyledList>
                </SectionContainer>

                <SectionContainer>
                    <SectionHeading>Smart Text Analyzer: Advanced Similarity Classifier</SectionHeading>
                        <StyledParagraph><strong>Dec 2022</strong></StyledParagraph>
                        <StyledParagraph>Developed custom algorithms for feature extraction (word frequency, sentence length, stemming) and log similarity scoring, enhancing the accuracy by <strong>20%</strong> of a <strong>Python-based</strong> text classification model.</StyledParagraph>
                        <StyledList>
                            <StyledListItem>Designed a scalable system to process, save, and load large text datasets (up to <strong>100,000 words</strong>), utilizing Python's file handling to streamline model training and evaluation.</StyledListItem>
                        </StyledList>
                </SectionContainer>

                <Calculator />

            </StyledMain>
            </StyledContainer>
            <Footer />
        </StyledBody>
    </>
  );
}
