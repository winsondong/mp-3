import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    background-color: #0033a0;
    color: #ffffff;
    padding: 1% 2%;

    @media screen and (max-width: 750px) { 
        justify-content: center;
        align-items: center;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
 `;


const StyledH1 = styled.h1`
    margin: 0;
    font-size: calc(4px + 2vw);
    font-weight: 500;
`;

const StyledSubtitle =  styled.p`
    font-size: calc(3px + 1vw);
    font-style: italic;
`;


export function Header(){
    return (
        <StyledHeader>
            <HeaderContainer>
                <StyledH1>Winson Dong</StyledH1>
                <StyledSubtitle>My online resume</StyledSubtitle>
            </HeaderContainer>
        </StyledHeader>
    );
};