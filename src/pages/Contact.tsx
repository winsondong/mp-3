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
    StyledParagraph,
    ContactImage,

} from "../StyledComponents"


export function Contact() {
  return (
    <>  
        <DynamicTitle />
        <Header />
        <StyledContainer>
        <Nav />
        <StyledMain>
            <SectionTitle><strong>Contact Information</strong></SectionTitle>

            <SectionContainer>
                <SectionHeading>Get in Touch</SectionHeading>
                <StyledParagraph><strong>Email:</strong> winson@bu.edu</StyledParagraph>
                <StyledParagraph><strong>Phone:</strong> 859-585-9338</StyledParagraph>
                <StyledParagraph><strong>Address:</strong> 808 Greenfield Trail, Mt. Sterling, KY 40353</StyledParagraph>
            </SectionContainer>

            <SectionContainer>
                <SectionHeading>Connect with Me</SectionHeading>
                    <StyledParagraph>Feel free to reach out for any professional inquiries, collaborations, or networking opportunities. I'm open to discussing software development, AI projects, or any tech-related ventures!</StyledParagraph>
            </SectionContainer>
            <ContactImage src="/imgs/smile.jpg"></ContactImage>

        </StyledMain>
        </StyledContainer>
        <Footer />
    </>
  );
}
