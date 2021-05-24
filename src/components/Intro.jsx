import React, {useEffect} from "react";
import styled from 'styled-components';
import {background, backgroundDesktop, backgroundMobile} from "../constants/images";
import 'animate.css/animate.css';

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    padding: 19.44vh 8.8888vw 20px;
    background: linear-gradient(180deg, rgba(2,1,21,1) 0%, rgba(15,12,52,1) 50%, rgba(9,7,41,1) 100%);
    min-height: 700px;
    @media screen and (min-width: 640px){
       padding:  19.44vh 3.8888vw 20px;
    }
`
const Background = styled.div`
    position: absolute;
    left: 0;
    top: 50px;
    height: calc(100vh - 50px);
    overflow: hidden;
    width: 100vw;
    bottom:0;
`
const Img = styled.img`
    height: 100%;
    margin-left: -150vw;

    @media screen and (min-width: 640px){
       margin-left: -88vw;
    }
    @media screen and (min-width: 1100px){
       margin-left: 0;
    }
`
const InfoWrapper = styled.div`
    position: relative;
    z-index: 2;
    color: white;
    width: 420px;
     @media screen and (min-width: 640px){
           margin-top: 10vh;
    }
    @media screen and (min-width: 1100px){
          margin-top: 0;
    }
`

const Title = styled.h1`
    font-size: 34px;
    max-width: 70vw;
    @media screen and (min-width: 640px){
            font-size: 36px;
    }
    @media screen and (min-width: 1100px){
             font-size: 48px;
    }
`
const Black = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width:100vw;
    z-index:2;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    @media screen and (min-width: 1100px){
            display: none;
    }
`
const Text = styled.p`
    display: none;
    
     @media screen and (min-width: 640px){
        display: inherit;
        font-size: 24px;
        padding: 4.6vh 0;
        text-align: justify;
    }
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
    border-radius: 6px;
    &:hover{
        background-color: #e25625;
    }
    
     @media screen and (min-width: 640px){
        width: 100%;
         margin-top: 0;
        font-size: 24px;
        line-height: 31px;
        padding: 11px 0;
    }
`
const Intro = () => {

    return <Wrapper>
        <Background>
            <Img src={background} alt={''}/>
            {/*<ImgMobile src={backgroundMobile} alt={''}/>*/}
        </Background>
        <Black />
        <InfoWrapper>
            <Title className={'animate__animated animate__slow animate__fadeInLeft'}>
                ОХРАННЫЕ УСЛУГИ
                РАЗЛИЧНОЙ
                СЛОЖНОСТИ
            </Title>
            <Text className={'animate__animated animate__slow animate__delay-1s animate__fadeInLeft'}>
                Наши сотрудники знают самые <b>короткие</b> маршруты и <b>особенности</b> вашего объекта
            </Text>
            <Button className={'animate__animated animate__slow animate__delay-2s animate__fadeInLeft'}>
                Получить консультацию
            </Button>
        </InfoWrapper>
    </Wrapper>
}

export default Intro;