import styled from "styled-components";


/* styling the whole page */

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh 0;
  background-color: #f5faff;
  width: 70%;
  min-height: 100vh;

   @media screen and (max-width: 750px) { 
        width: 100%;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 750px) { 
        flex-direction: column;
    }
`;


/* internal web's main styles */
export const SectionTitle = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: calc(4px + 2.5vw);
    font-weight: 500;
    color: #0033a0;
    margin-bottom: 4%;
`;

export const SectionContainer = styled.div`
    width: 80%;
    background: #ffffff;
    padding: 2vw;
    margin: 2vw 0;
    border-radius: 1vw;
    box-shadow: 0 calc(2px + 0.3vw) calc(6px + 0.5vw) black
`;

export const SectionHeading = styled.h3`
    color: #005bbb;
    font-size: calc(18px + 0.4vw);
    font-weight: bold;
    margin-bottom: 1vh;
    border-bottom: calc(0.15px + 0.15vw) solid #005bbb;
    padding-bottom: 1vh;
`;

export const CourseworkContainer = styled.div`
    margin-top: 2vh;

`;

export const CourseworkHeading = styled.h4`
    color: #005bbb;
    font-size: calc(18px + 0.4vw);
    margin-bottom: 1vh;
`;

export const StyledList = styled.ul`
    list-style-type: disc;
    padding-left: 2vw;
`;

export const StyledListItem = styled.li`
    font-size: calc(14px + 0.4vw);
    margin-bottom: 1vh;
    color: #333;
`;

export const StyledParagraph =  styled.p`
    font-size: calc(14px + 0.4vw);
    color: #333;
    margin-bottom: 1vh;
`;

export const ContactImage = styled.img`
    width: 100%;
    max-width: 19vw;
    border-radius: 50%;
    margin-bottom: 2vh;
    box-shadow: 0px calc(2px + 0.3vw) calc(6px + 0.5vw) black;
`;
/* internal webpage's main styles ends */