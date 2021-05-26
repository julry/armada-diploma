import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: rgba(0,0,0,0.25);
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    width: 100vw;
    height:100vh;
    overflow: hidden;
    z-index: 2000;
`

const Modal = styled.div`
    width: 80vw;
    max-width: 350px;
    min-height: 300px;
    background: white;
    border-radius: 5px;
    border: 1px solid #FE5D26;
    padding: 2vh 5vw;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Title = styled.p`
    font-size: 24px;
    text-align: center;
    color: #FE5D26;
    margin-bottom: 2vh;
`

const Text = styled.p`
     font-size: 18px;
     color: #01013A;
     text-align: center;

`
export const ModalSend = () => {
    return <Wrapper>
        <Modal>
            <Title>Ваша заявка обрабатывается!</Title>
            <Text>Ждите звонка</Text>
        </Modal>
    </Wrapper>
}