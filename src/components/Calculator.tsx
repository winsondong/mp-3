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
    padding-top: 0.7vh;
    margin-top: 0.7vh;
`;



export function Calculator(){
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber, setSecondNumber] = useState<string>("");
    const [output, setOutput] = useState<string>("");
   

    const myAdd = () => setOutput(String(Number(firstNumber) + Number(secondNumber)));
    const mySubtract = () => setOutput(String(Number(firstNumber) - Number(secondNumber)));
    const myMultiply = () => setOutput(String(Number(firstNumber) * Number(secondNumber)));
    const myDivide = () => setOutput(String(Number(secondNumber) !== 0 ? (Number(firstNumber) / Number(secondNumber)) : "Error"));
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
        setOutput(String(result));
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
                    <Input type="number" id="first-number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)}></Input>
                    <Label htmlFor="second-number">Second Number:</Label>
                    <Input type="number" id="second-number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)}></Input>

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
                <OutputH3 style={{ color: Number(output) < 0 ? "red" : "#005bbb" }}>{String(output)}</OutputH3>

            </CalculatorContainer>
        
    );
}
