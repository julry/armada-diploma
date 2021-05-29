import styled from "styled-components";
import React, {useEffect, useRef, useState} from "react";
import {Title} from "../shared/Title";
import {CheckMark} from "../shared/svg/CheckMark";
import {ModalSend} from "../shared/ModalSend";

const Wrapper = styled.div`
    background: #01013A;
    min-height: 93vh;
    position: relative;
    @media screen and (min-width: 640px){
        padding: 5.11111vh 3.8888vw 5.11111vh;
    }
`

const FormWrapper = styled.div`
    margin: auto;
    background: white;
    height: calc(100% - 5vh);
    padding: 2.5vh 3.125vw 5vh;
    width: fit-content;
    max-width: 500px;
`
const FormTitle = styled(Title)`
    font-weight: 400;
`

const FormFields = styled.div`
    margin: 5vh 0 1vh;
`
const Text = styled.div`
font-size: 18px;
line-height: 21px;
color: #01013A;
`
const Input = styled.input`
    width: 100%;
    margin: 2vh 0 5vh;
    height: 35px;
    padding: 5px;
    outline: none;
    border: 1px solid #CECCCC;
    border-radius: 5px;
    &:focus{ 
        border: 1px solid #FE5D26
    }
`
const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    height: 90px;
    padding: 5px;
    margin: 2vh 0 1.6vh;
    border: 1px solid #CECCCC;
    outline: none;
    border-radius: 5px;
    font-family: "PT Sans",serif;
    
    &:focus{ 
        border: 1px solid #FE5D26
    }
`
const Button = styled.button`
    outline: none;
    border:none;
    font-size: 24px;
    line-height: 31px;
    padding: 11px 0;
    width: 100%;
    color: white;
    background-color: #FE5D26;
    cursor: pointer;
    border-radius: 6px;
    &:hover{
        background-color: #e25625;
    }
`

const InputStyled = styled.input`
  display: none;
`;

const RadioIconStyled = styled(CheckMark)`
  position: relative;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-right: 7px;
  top: -4px;
  left: -3px;
  visibility: hidden;
  z-index: 3;
  @media screen and (max-width: 350px) { 
       width: 24px;
       height: 24px;
       top: -8px;
  }
  
 
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 15px;
  height: 15px;
  border: 1px solid #FE5D26;
  border-radius: 5px;
  
  @media screen and (max-width: 350px) { 
       width: 15px;
       height: 15px;
  }
  
  & ${InputStyled}:checked + ${RadioIconStyled}{
    visibility: visible;
  }
`;

const TextStyled = styled.p`
  color: #7E7E7E;
  font-size: 12px;
  line-height: 14px;
  white-space: pre-line;
`;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 2vh;
`;
const TextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  flex-shrink: 0;
  
`;

const HelperText = styled.p`
  color: red;
  font-size: 10px;
  margin-top: -4vh;
  margin-bottom: 4vh;
`

const Form  = () => {
    const [personDataAgree, setPersonDataAgree] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEmpty, setIsEmpty] = useState(false);
    const [isError, setIsError] = useState(false);
    const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const sendForm = () => {
        if (name==='' || phone==='') setIsEmpty(true);
        else if (!phone.match(phoneReg)) setIsError(true);
        else setIsModalOpen(true)
    }

    return <Wrapper id={'form'}>
        <FormWrapper>
        <FormTitle>Бесплатная консультация</FormTitle>
        <FormFields>
            <Text>
                ФИО <span style={{color:'red'}}>*</span>
            </Text>
            <Input
                placeholder={'Иванов Иван Иванович'}
                value={name}
                style={isEmpty&&name==='' ? {borderColor: 'red'} : {}}
                onChange={(e)=> {
                    setIsEmpty(false);
                    setName(e.target.value)
                }}
            />
            <Text>
                Номер телефона <span style={{color:'red'}}>*</span>
            </Text>
            <Input
                type={'phone'}
                placeholder={'+79000000000'}
                style={isEmpty&&phone==='' ? {borderColor: 'red'} : {}}
                value={phone}
                onChange={(e)=> {
                    setIsError(false);
                    setIsEmpty(false);
                    setPhone(e.target.value)
                }}
            />
            {isError&&<HelperText>Введите корректный номер</HelperText>}
            <Text>
                Email
            </Text>
            <Input
                type={'email'}
                placeholder={'email@email.com'}
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
            />
            <Text>
                Комментарий
            </Text>
            <TextArea placeholder={'Введите комментарий...'} value={comment} onChange={(e)=> setComment(e.target.value)}/>
        </FormFields>
            <WrapperStyled>
                <LabelStyled >
                    <InputStyled
                        type='checkbox'
                        name={'agreement'}
                        value={'agree'}
                        checked={personDataAgree}
                        onChange={() => setPersonDataAgree(value=>!value)}
                    />
                    <RadioIconStyled/>
                    <TextWrapperStyled>
                        <TextStyled>Я добровольно отправляю свои данные</TextStyled>
                    </TextWrapperStyled>
                </LabelStyled>
            </WrapperStyled>
            <Button onClick={sendForm}> Отправить заявку</Button>
        </FormWrapper>
        {isModalOpen&&<ModalSend setIsModalOpen={setIsModalOpen}/>}
    </Wrapper>
}

export default Form;