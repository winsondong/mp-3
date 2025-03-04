import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import { 
    StyledBody,
    StyledContainer,
    StyledMain,

    SectionTitle,
    SectionContainer, 
    SectionHeading,
    StyledParagraph 

} from "../StyledComponents"


export function Experiences() {
  return (
    <>  
        <StyledBody>
            <Header />
            <StyledContainer>
            <Nav />
            <StyledMain>
                <SectionTitle><strong>Experiences</strong></SectionTitle>
                <SectionContainer>
                    <SectionHeading>Google | Mountain View, CA</SectionHeading>
                    <StyledParagraph><strong>Software Engineer Intern</strong></StyledParagraph>
                    <StyledParagraph><strong>May - August 2024</strong></StyledParagraph>
                    <StyledParagraph>Developed a full-stack web app using React and Firebase, creating a Pokémon-themed interactive experience. Built real-time data fetching with Firestore, animated UI with Framer Motion, and OAuth authentication via Firebase Auth. Optimized performance with lazy loading and serverless functions. Designed a RESTful API, wrote unit tests, and deployed via Vercel with CI/CD pipelines. Conducted A/B testing for UX improvements, delivering a dynamic and engaging application with real-time interactivity.</StyledParagraph>
                </SectionContainer>

                <SectionContainer>
                    <SectionHeading>Amazon | Seattle, WA</SectionHeading>
                        <StyledParagraph><strong>Software Engineer Intern</strong></StyledParagraph>
                        <StyledParagraph><strong>May - August 2023</strong></StyledParagraph>
                        <StyledParagraph>Developed a dynamic web app using React (TypeScript) for an interactive NBA Dream Team Builder (2016-17 Season), allowing users to filter players by position, team, and age. Built a RESTful API with Flask and Pandas to efficiently process and serve player data. Designed a custom UI for seamless filtering and real-time updates, removing reliance on Bootstrap for styling.</StyledParagraph>
                </SectionContainer>
            </StyledMain>
            </StyledContainer>
            <Footer />
        </StyledBody>
    </>
  );
}
