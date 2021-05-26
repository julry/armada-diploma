import React, {useState} from 'react';
import styled from "styled-components";
import {logo} from "../constants/images";
import {Burger} from "../shared/svg/Burger";
import {PAGES} from "../App";

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
    color: #EEECEC;
    &:hover{
        color: #FE5D26;
    }
`
const ActiveLink = styled(Link)`
        color: #FE5D26;
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

export const Header = ({currentPage}) => {
    const [isVisible, setIsVisible] = useState(false);
    return <Wrapper>
        <Logo src={logo} alt={''}/>
        {/*<Name>АРМАДА ТВЕРЬ</Name>*/}
        <Pages>
            {currentPage===PAGES.Main ? <ActiveLink>Главная</ActiveLink> : <Link href={'#main'}>Главная</Link>}
            {currentPage===PAGES.Services ? <ActiveLink>Услуги</ActiveLink> : <Link href={'#services'}>Услуги</Link>}
            {currentPage===PAGES.Company ? <ActiveLink>О компании</ActiveLink> : <Link href={'#company'}>О компании</Link>}
            {currentPage===PAGES.Contacts ? <ActiveLink>Контакты</ActiveLink> : <Link href={'#contacts'}>Контакты</Link>}

        </Pages>
        <BurgerStyled />
        {/*{isVisible&&<ModalMenu />}*/}
    </Wrapper>
}