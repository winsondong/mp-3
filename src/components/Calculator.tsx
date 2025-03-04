import styled from "styled-components";
import { useState } from "react";

export const CalculatorContainer = styled.div`
    width: 35%;
    background: #ffffff;
    padding: 1.5vw;
    margin: 2vw auto;
    border-radius: 1vw;
    box-shadow: 0px calc(2px + 0.3vw) calc(6px + 0.5vw) black;
    text-align: center;
`;

export const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1vh;
`;

export const Label = styled.label`
    font-size: calc(12px + 0.3vw);
    font-weight: bold;
    color: #005bbb;
    margin-bottom: 0.3vh;
`;

export const Input = styled.input`
    width: 70%;
    padding: 0.7vh;
    margin-bottom: 0.7vh;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: calc(12px + 0.3vw);
    text-align: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.7vw;
    margin-bottom: 1.5vh;
`;

export const CalcButton = styled.button`
    padding: 0.7vh;
    font-size: calc(12px + 0.3vw);
    font-weight: bold;
    background-color: #005bbb;
    color: white;
    border: none;
    border-radius: 0.5vw;

    &:hover {
        background-color: #0033a0;
        transform: scale(1.05);
    }
`;

export const OutputParagraph = styled.p`
    font-size: calc(12px + 0.3vw);
    color: #333;
`;

export const OutputH3 = styled.h3`
    font-size: calc(14px + 0.4vw);
    color: #005bbb;
    padding-top: 0.7vh;
    margin-top: 0.7vh;
`;

export function Calculator(){
    const [firstNumber, setFirstNumber] = useState<number | string>(0);
    const [secondNumber, setSecondNumber] = useState<number | string>(0);
    const [output, setOutput] = useState<number | string>(0);
   

    
    const myAdd = () => setOutput(Number(firstNumber) + Number(secondNumber))
    const mySubtract = () => setOutput(Number(firstNumber) - Number(secondNumber))
    const myMultiply = () => setOutput(Number(firstNumber) * Number(secondNumber))
    const myDivide = () => setOutput(Number(secondNumber) !== 0 ? (Number(firstNumber) / Number(secondNumber)) : "Error");
    const myPower = () => {
        let result = 1;
        if (Number(secondNumber) >= 0) {
            for (let i = 0; i < Number(secondNumber); i++) {
                result *= Number(firstNumber);
            }
        } else {
            for (let i = 0; i < -Number(secondNumber); i++) {
                result *= Number(firstNumber);
            }
            result = 1 / result;
        }
        setOutput(result);
    };
    const myClear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOutput("");
    };

    return (
        <CalculatorContainer>
            <InputSection>
                <Label htmlFor="first-number">First Number:</Label>
                <Input type="number" id="first-number" value={firstNumber} onChange={(e) => setFirstNumber(Number(e.target.value))}></Input>
                <Label htmlFor="second-number">Second Number:</Label>
                <Input type="number" id="second-number" value={secondNumber} onChange={(e) => setSecondNumber(Number(e.target.value))}></Input>

            </InputSection>

            <ButtonContainer>
                <CalcButton onClick={myAdd}>+</CalcButton>
                <CalcButton onClick={mySubtract}>-</CalcButton>
                <CalcButton onClick={myMultiply}>*</CalcButton>
                <CalcButton onClick={myDivide}>/</CalcButton>
                <CalcButton onClick={myPower}>**</CalcButton>
                <CalcButton onClick={myClear}>Clear</CalcButton>
            </ButtonContainer>
            
            <OutputParagraph><strong>Output:</strong></OutputParagraph>
            <OutputH3>{output}</OutputH3>


        </CalculatorContainer>
    );
}
