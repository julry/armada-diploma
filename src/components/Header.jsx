import React, {useState} from 'react';
import styled from "styled-components";
import {logo} from "../constants/images";
import {Burger} from "../shared/svg/Burger";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #07073F;
  display: flex;
  z-index: 1000;
  align-items: center;
  color: #EEECEC;
  padding: 16px 32px;
  font-size: 18px;
  justify-content: space-between;
  @media screen and (min-width: 1100px){
          padding: 16px 56px 16px 32px;
  }
`
const Logo = styled.img`
  height: 32px;
  margin: -20px 0;
  @media screen and (min-width: 640px){
        margin: 0;
        height: 55px;
  }
  
`
const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    
    &:hover{
        color: #FE5D26;
    }
`
const Pages = styled.div`
    display:  none;
    @media screen and (min-width: 1100px){
        display:flex;
        width: 33.333vw;
        max-width: 480px;
        justify-content: space-between;
    }
`

const BurgerStyled = styled(Burger)`
    width: 27px;
    height: 27px;
    @media screen and (min-width: 1100px){
      display: none;
    }
`

export const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    return <Wrapper>
        <Logo src={logo} alt={''}/>
        {/*<Name>АРМАДА ТВЕРЬ</Name>*/}
        <Pages>
            <Link>Главная</Link>
            <Link>Услуги</Link>
            <Link>О компании</Link>
            <Link>Контакты</Link>
        </Pages>
        <BurgerStyled />
        {/*{isVisible&&<ModalMenu />}*/}
    </Wrapper>
}