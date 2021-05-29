import React, {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import {Title} from "../shared/Title";
import {HouseSecurity} from "../shared/svg/houseSecur";
import {Video} from "../shared/svg/video";
import {FireSecurity} from "../shared/svg/FireSecurity";
import {MobileGroup} from "../shared/svg/MobileGroup";
import {PhysSecurity} from "../shared/svg/PhysSecurity";
import {BusinessSecurity} from "../shared/svg/BusinessSecurity";
import 'animate.css/animate.css';
import {useOnScreen} from "../hooks/useScreen";
import {PAGES} from "../App";
import {ModalInfo} from "../shared/ModalInfo";


const Wrapper = styled.div`
    padding: 5.11111vh 8.8888vw 0;
    min-height: 700px;
    @media screen and (min-width: 640px){
        padding: 5.11111vh 3.8888vw 0;
      height: calc(100vh - 87px);
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
  position: relative;
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

const Services  = ({currentPage, setCurrentPage}) => {
    const [isMoreOpenHouse, setIsMoreOpenHouse] = useState(false);
    const [isMoreOpenVideo, setIsMoreOpenVideo] = useState(false);
    const [isMoreOpenFire, setIsMoreOpenFire] = useState(false);
    const [isMoreOpenMobile, setIsMoreOpenMobile] = useState(false);
    const [isMoreOpenPhys, setIsMoreOpenPhys] = useState(false);
    const [isMoreOpenBusiness, setIsMoreOpenBusiness] = useState(false);
    const target = useRef(null);
    const onScreen = useOnScreen(target);
    useEffect(()=>{
        if (onScreen) {
            setCurrentPage(PAGES.Services);
        }
    }, [onScreen, setCurrentPage]);
    return  <Wrapper ref={target} id={'services'}>
            <Title>
                Наши услуги
            </Title>
        {(currentPage===PAGES.Services || currentPage === PAGES.Company ) ? <>
            <ServicesWrapper>
                <ServiceCard className={currentPage===PAGES.Services ? 'animate__animated animate__slow animate__zoomIn' : ""} style={{zIndex: '6'}}>
                    <HouseSecurity />
                    <Description>
                        <DescriptionTitle>
                            Охрана частной
                            собственности
                        </DescriptionTitle>
                        <MoreLink onClick={()=>setIsMoreOpenHouse(true)}>Больше..</MoreLink>
                        {isMoreOpenHouse&&<ModalInfo
                            text={'Все больше и больше людей предпочитают заботиться о собственной безопасности, безопасности своих объектов недвижимости во избежание проблемных ситуаций, связанных с мошенническими системами, вторжением в личное пространство посторонних людей.'}
                            onClose={setIsMoreOpenHouse}
                        />}
                    </Description>
                </ServiceCard>
                <ServiceCard style={{zIndex: '5'}} className={currentPage===PAGES.Services ? 'animate__animated animate__slow animate__zoomIn' : ''}>
                    <Video />
                    <Description>
                        <DescriptionTitle>
                            Монтаж видеонаблюдения
                        </DescriptionTitle>
                        <MoreLink onClick={()=>setIsMoreOpenVideo(true)}>Больше..</MoreLink>
                        {isMoreOpenVideo&&<ModalInfo
                            text={'Мы используем только современное оборудование проверенных производителей и делаем все возможное, чтобы оптимизировать стоимость услуг. В зависимости от сложности задачи монтаж занимает от нескольких часов до нескольких дней.'}
                            onClose={setIsMoreOpenVideo}
                        />}
                    </Description>
                </ServiceCard>
                <ServiceCard style={{zIndex: '4'}} className={currentPage===PAGES.Services ?'animate__animated animate__slow animate__zoomIn animate__delay-1s': ''}>
                    <FireSecurity />
                    <Description>
                        <DescriptionTitle>
                            {"Пожарная\nсигнализация"}
                        </DescriptionTitle>
                        <MoreLink onClick={()=>setIsMoreOpenFire(true)}>Больше..</MoreLink>
                        {isMoreOpenFire&&<ModalInfo
                            text={'Ежегодно тысячи людей погибают из-за отсутствия элементарных средств противопожарной безопасности. Не стоит экономить на своей безопасности!\n' +
                            'Пожарная сигнализация моментально выявит пожар еще на ранней стадии и немедленно передаст сигнал на пульт.'}
                            onClose={setIsMoreOpenFire}
                        />}
                    </Description>
                </ServiceCard>
                <ServiceCard style={{zIndex: '3'}} className={currentPage===PAGES.Services ?'animate__animated animate__slow animate__zoomIn animate__delay-1s' : ''}>
                    <MobileGroup />
                    <Description>
                        <DescriptionTitle>
                            Мобильная группа
                        </DescriptionTitle>
                        <MoreLink onClick={()=>setIsMoreOpenMobile(true)}>Больше..</MoreLink>
                        {isMoreOpenMobile&&<ModalInfo
                            text={"Возникновение нештатных ситуаций на охраняемых объектах, а также во время проведения массовых мероприятий, требует мгновенной реакции на происходящее и принятия решений, способных обеспечить безопасность людей и сохранность материальных ценностей."}
                            onClose={setIsMoreOpenMobile}
                        />}
                    </Description>
                </ServiceCard>
                <ServiceCard style={{zIndex: '2'}} className={currentPage===PAGES.Services ? 'animate__animated animate__slow animate__zoomIn animate__delay-2s': ''}>
                    <PhysSecurity />
                    <Description>
                        <DescriptionTitle>
                            Физическая охрана
                        </DescriptionTitle>
                        <MoreLink onClick={()=>setIsMoreOpenPhys(true)}>Больше..</MoreLink>
                        {isMoreOpenPhys&&<ModalInfo
                            text={'Физическая охрана предусматривает непосредственное нахождение сотрудников охранной организации на объекте. Физическая охрана осуществляется строго по инструкции, согласованной с Заказчиком, и контролируется начальником охраны'}
                            onClose={setIsMoreOpenPhys}
                        />}
                    </Description>
                </ServiceCard>
                <ServiceCard style={{zIndex: '1'}} className={currentPage===PAGES.Services ? 'animate__animated animate__slow animate__zoomIn animate__delay-2s' : ''}>
                    <BusinessSecurity />
                    <Description>
                        <DescriptionTitle>
                            Охрана бизнеса
                        </DescriptionTitle>
                        <MoreLink onClick={()=>setIsMoreOpenBusiness(true)}>Больше..</MoreLink>
                        {isMoreOpenBusiness&&<ModalInfo
                            text={'Охрана коммерческого объекта — необходимая и важная статья расходов, это ваша гарантия безопасности. Услуги ЧОО "АРМАДА Тверь транспортная безопасность" — это безупречное соотношение цены и качества работы.'}
                            onClose={setIsMoreOpenBusiness}
                        />}
                    </Description>
                </ServiceCard>
            </ServicesWrapper>
            </>
            : <div style={{height:'100vh'}} />}

    </Wrapper>

}

export default Services;