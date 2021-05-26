import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import {Title} from "../shared/Title";
import {autotrans, buildingLogo, prom} from "../constants/images";
import Slider from "react-slick";
import {useOnScreen} from "../hooks/useScreen";
import {PAGES} from "../App";

const Wrapper = styled.div`
    padding: 5.11111vh 8.8888vw 5vh;
    min-height: 700px;
    overflow-x: hidden;
    @media screen and (min-width: 640px){
       padding: 5.11111vh 3.8888vw 5vh;
    }
`

const Description = styled.div`
    padding: 5vh 0 1vh;
    @media screen and (min-width: 1100px){
    padding: 7.1111vh 10.4166vw 2vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Priorities = styled.div`
    width: 310px;
    height: 314px;
    margin: 0 auto 2.5643vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 1100px){
           margin: 0 10.29833vw 0 0;
    }
`
const PrioritiesBg = styled.div`
    position: absolute;
    left: 97px;
    width: 116px;
    height: 100%;
    background: #000080;
    z-index: -1;
    
`
const PriorityCard = styled.div`
    width: 310px;
    background: white;
    padding: 13px 0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    &:last-child {
      margin-bottom: 0;
    }
`

const PriorityText = styled.p`
    font-size: 24px;
    line-height: 31px;
`
const HighlightText = styled.span`
     color: #FE5D26;
     font-weight: bold;
`

const Text = styled.p`
    text-align: justify;
    font-size: 16px;
    line-height: 21px;
    color: #01013A;
    white-space: pre-wrap;
    @media screen and (min-width: 640px){
      font-size: 24px;
      line-height: 31px;
    }
`

const PartnersTitle = styled.p`
    font-size: 32px;
    line-height: 41px;
    color: #000080;
    text-align: center;
`
const SliderWrapper = styled.div`
    max-width: 990px;
    margin: 0 0 0 -5vh;
    width: 115vw;
    @media screen and (min-width: 640px){
        width: 100%;
        margin: 0 auto;
    }
`
const ImgWrapper = styled.div`
    margin-top: 10vh;
    display: flex !important;
    justify-content: center;
   
`
const Img = styled.img`
  height: 80px;
  width: 100%;
  object-fit: contain;
  @media screen and (min-width: 640px){
        height: 100px;
    }
    @media screen and (min-width: 1100px){
         height: 160px;

    }
`

const Company = ({setCurrentPage}) => {
    const [settings, setSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });


    useEffect(()=>{
        if (window.innerWidth < 640) {
            setSettings(settings=> ({...settings, slidesToShow: 2.5}))
        }
    }, []);

    const target = useRef(null);
    const onScreen = useOnScreen(target);
    useEffect(()=>{
        if (onScreen) {
            setCurrentPage(PAGES.Company);
            console.log(PAGES.Company);
        }
    }, [onScreen, setCurrentPage]);

    return <Wrapper ref={target} id={'company'}>
        <Title> О компании </Title>
        <Description>
            <Priorities className={'animate__animated animate__fadeInLeft'}>
                <PrioritiesBg />
                <PriorityCard>
                    <PriorityText>
                        <HighlightText> 6 </HighlightText> ЛЕТ НА РЫНКЕ
                    </PriorityText>
                </PriorityCard>
                <PriorityCard>
                    <PriorityText>
                        БОЛЕЕ <HighlightText>1000</HighlightText> КЛИЕНТОВ
                    </PriorityText>
                </PriorityCard>
                <PriorityCard>
                    <PriorityText>
                        <HighlightText> КВАЛИФИЦИРОВАННЫЕ </HighlightText> СОТРУДНИКИ
                    </PriorityText>
                </PriorityCard>
            </Priorities>
            <Text className={'animate__animated animate__fadeInRight animate__delay-1s'}>
                {'Начиная с 2015 года “Армада” безукорезненно работает на рынке предоставления охранных услуг в г. Тверь с полученной лицензией  №377 на осуществление частной охранной деятельности.\n\nВысококвалифицированные сотрудники действуют в соотвествии с Федеральным Законом “О частной детективной и охранной деятельности в РФ”.'}
            </Text>
        </Description>
        <PartnersTitle>
            Партнеры
        </PartnersTitle>
        <SliderWrapper>
            <Slider {...settings}>
                <ImgWrapper>
                    <Img src={autotrans} alt={''}/>
                </ImgWrapper>
                <ImgWrapper>
                    <Img src={buildingLogo} alt={''}/>
                </ImgWrapper>
                <ImgWrapper>
                    <Img src={prom} alt={''}/>
                </ImgWrapper>
            </Slider>
        </SliderWrapper>

    </Wrapper>
}

export default Company;