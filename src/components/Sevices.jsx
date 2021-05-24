import React from "react";
import styled from 'styled-components';
import {Title} from "../shared/Title";
import {HouseSecurity} from "../shared/svg/houseSecur";
import {Video} from "../shared/svg/video";
import {FireSecurity} from "../shared/svg/FireSecurity";
import {MobileGroup} from "../shared/svg/MobileGroup";
import {PhysSecurity} from "../shared/svg/PhysSecurity";
import {BusinessSecurity} from "../shared/svg/BusinessSecurity";


const Wrapper = styled.div`
    padding: 5.11111vh 8.8888vw 0;
    min-height: 700px;
    @media screen and (min-width: 640px){
        padding: 5.11111vh 3.8888vw 0;
      height: calc(100vh - 87px);
      overflow: hidden;
    }
`
const ServicesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 1.6666vh;

     @media screen and (min-width: 640px){
          padding-top: 6.6666vh;
    }
    @media screen and (min-width: 1100px){
           margin-left: 18.9583vw;
    }
`

const ServiceCard = styled.div`
  width: 100%;
  padding: 2.111vh;
  display: flex;
  background: #FFFFFF;
  margin-bottom: 1.6666vh;
  box-shadow: 0px 2px 3px #CECCCC;
  margin-right: 1.25vw;
  min-height: 120px;
  align-items: center;
  & svg {
    height: 8.2512vh;
    width: 8.2512vh;
    min-width: 8.2512vh;
     @media screen and (min-width: 640px){
      height: 6.888vh;
      min-width:6.888vh;
      width:6.888vh;
    }
    @media screen and (min-width: 1100px){
       height: 11.111vh;
        width:11.111vh;
    }
  }
  
  &:hover{
      box-shadow: 8px 8px 10px 2px #000080;
  }
  
    @media screen and (min-width: 640px){
      margin-bottom: 8.6666vh;
         width: 40.888vw;
         margin-right: 2.25vw;

    }
    @media screen and (min-width: 1100px){
        width: 30.888vw;
        margin-right: 1.25vw;
    }
`

const Description = styled.div`
    padding: 5px;
    margin-left: 2vw;
`
const DescriptionTitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #01013A;
  margin-bottom: 1vw;
  white-space: pre-wrap;
  @media screen and (min-width: 640px){
  }
    @media screen and (min-width: 1100px){
        font-size: 24px;
        line-height: 31px;
    }

`

const MoreLink = styled.p`
    font-size: 18px;
    line-height: 21px;
    color: #FE5D26;
    cursor: pointer;
    &:hover {
        text-shadow: 0 1px 1px rgba(132, 88, 36, 1);
    }
`

const Services  = () => {
    return  <Wrapper>
            <Title>
                Наши услуги
            </Title>
            <ServicesWrapper>
                <ServiceCard>
                    <HouseSecurity />
                    <Description>
                        <DescriptionTitle>
                            Охрана частной
                            собственности
                        </DescriptionTitle>
                        <MoreLink>Больше..</MoreLink>
                    </Description>
                </ServiceCard>
                <ServiceCard>
                    <Video />
                    <Description>
                        <DescriptionTitle>
                            Монтаж видеонаблюдения
                        </DescriptionTitle>
                        <MoreLink>Больше..</MoreLink>
                    </Description>
                </ServiceCard>
                <ServiceCard>
                    <FireSecurity />
                    <Description>
                        <DescriptionTitle>
                            {"Пожарная\nсигнализация"}
                        </DescriptionTitle>
                        <MoreLink>Больше..</MoreLink>
                    </Description>
                </ServiceCard>
                <ServiceCard>
                    <MobileGroup />
                    <Description>
                        <DescriptionTitle>
                            Мобильная группа
                        </DescriptionTitle>
                        <MoreLink>Больше..</MoreLink>
                    </Description>
                </ServiceCard>
                <ServiceCard>
                    <PhysSecurity />
                    <Description>
                        <DescriptionTitle>
                            Физическая охрана
                        </DescriptionTitle>
                        <MoreLink>Больше..</MoreLink>
                    </Description>
                </ServiceCard>
                <ServiceCard>
                    <BusinessSecurity />
                    <Description>
                        <DescriptionTitle>
                            Охрана бизнеса
                        </DescriptionTitle>
                        <MoreLink>Больше..</MoreLink>
                    </Description>
                </ServiceCard>
            </ServicesWrapper>

    </Wrapper>

}

export default Services;