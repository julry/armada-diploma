import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right:0;
  padding: 24px;
  background: white;
  color: #01013A;
  text-align: justify;
  font-size: 18px;
  line-height: 21px;
  width: 320px;
  z-index: 100;
`

const Button = styled.button`
    outline: none;
    border:none;
    font-size: 20px;
    line-height: 26px;
    padding: 18px 14px;
    margin-top: 6.5vh;
    color: white;
    background-color: #FE5D26;
    cursor: pointer;
    width: 100%;
    border-radius: 6px;
    &:hover{
        background-color: #e25625;
    }
     @media screen and (min-width: 640px){
        font-size: 24px;
        line-height: 31px;
        padding: 11px 0;
    }
`

const CloseBtn = styled.p`
    color: #7E7E7E;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
`

export const ModalInfo = (props) =>{
    return <Wrapper>
        <CloseBtn onClick={()=>props.onClose(false)}>х</CloseBtn>
        <p>{props.text}</p>
        <Button>Оставить заявку</Button>
    </Wrapper>
}