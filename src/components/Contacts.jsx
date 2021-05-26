import React, {useEffect, useRef, useState} from "react";
import {Title} from "../shared/Title";
import styled from "styled-components";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import {Phone} from "../shared/svg/Phone";
import {Address} from "../shared/svg/Address";
import {Email} from "../shared/svg/Email";
import {useOnScreen} from "../hooks/useScreen";
import {PAGES} from "../App";

const Wrapper = styled.div`
    padding: 5.11111vh 3.8888vw 0;
     @media screen and (min-width: 640px){
                min-height: 700px;
    }
`

const ContactsWrapper = styled.div`
    margin: 5vh auto 0;
    width: fit-content;
    @media screen and (min-width: 1100px){
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
`

const Contact = styled.div`
    display: flex;
    margin-bottom: 30px;
    align-items: center;
    & svg{
        width: 25px;
        height: 25px;
        margin-right: 15px;
        
        @media screen and (min-width: 640px){
            width: 35px;
            height: 35px;
        }
    }
`

const MapWrapper = styled.div`
    margin-bottom: 2vh;
    @media screen and (min-width: 1100px){
        margin-left: 125px;
        margin-bottom: 0;
    }
`

const MainContact = styled.p`
color: #000080;
font-size: 18px;
line-height: 23px;
    @media screen and (min-width: 640px){
        font-size: 24px;
        line-height: 31px;
    }
`

const AddictiveInfo = styled.p`
    font-size: 14px;
    line-height: 16px;
    color: #7E7E7E;
    @media screen and (min-width: 640px){
        font-size: 18px;
        line-height: 21px;
    }
`
const Contacts = ({setCurrentPage}) => {

    const [height, setHeight] = useState('66.666vh');
    const [width, setWidth] = useState('88.888vh');

    useEffect(()=>{
        if (window.innerWidth < 1100){
            setWidth('80vw');
            setHeight('500px');
        }
        if (window.innerWidth < 640){
            setWidth('90vw');
            setHeight('215px');
        }
    },[]);
    const mapData = {
        center: [56.865446, 35.944065],
        zoom: 15,
    };

    const coordinates = [
        [56.865446, 35.944065],
    ];

    const target = useRef(null);
    const onScreen = useOnScreen(target);
    useEffect(()=>{
        if (onScreen) {
            setCurrentPage(PAGES.Contacts);
            console.log(PAGES.Contacts);
        }
    }, [onScreen, setCurrentPage]);


    return <Wrapper ref={target} id={'contacts'}>
        <Title>Контакты</Title>
        <ContactsWrapper>
            <MapWrapper>
                <YMaps>
                    <Map defaultState={mapData} width={width} height={height}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} key={coordinate} />)}
                    </Map>
                </YMaps>
            </MapWrapper>
            <div>
                <Contact>
                    <Phone />
                    <div>
                        <MainContact>
                            +7 (900) 017-85-85
                        </MainContact>
                        <AddictiveInfo>
                            Пн-пт 9:00-19:00
                        </AddictiveInfo>
                    </div>
                </Contact>
                <Contact>
                    <Address />
                    <div>
                        <MainContact>
                            Тверь, ул. Маяковского
                        </MainContact>
                        <AddictiveInfo>
                            д. 37, оф. 305
                        </AddictiveInfo>
                    </div>
                </Contact>
                <Contact>
                    <Email />
                    <MainContact>
                        armada-tver@mail.ru
                    </MainContact>
                </Contact>
            </div>

        </ContactsWrapper>
    </Wrapper>
}


export default Contacts;