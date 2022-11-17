import React, {ElementType, useState} from 'react';
import styled from '@emotion/styled'
import './App.css';
import bg from '../src/assets/img/app_background.jpg'


export type ImageProps = {
    src: string
    children: React.ReactNode | ElementType
}

type TextProps = {
    isConquered: string
}

type ButtonProps = {
    background: string
}

const MainDiv = styled.div<ImageProps>`
  width: 90%;
  min-height: 100vh;
  margin: 0;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`

const StyledButton = styled.button<ButtonProps>`
  align-content: center;
  padding: 10px 10px;
  color: #ffff;
  border: none;
  font-size: 2rem;
  border-radius: 19px;
  background: ${props => props.background};
  margin: 5px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  &:active {
    opacity: 0.9;
    background: #f4adb1;
  }
`

const StyledText = styled.p<TextProps>`
  display: ${props => props.isConquered};
  color: red;
  font-size: larger;
  font-weight: bold;
  margin: 10px
`

function App() {

    const [world, setWorld] = useState(0)
    const [isConquered, setIsConquered] = useState(false)

    const handlerConquerWorld = () => {
        setWorld(world + 1)
        setIsConquered(true)
    }

    const handlerResetConquerWorld = () => {
        setWorld(0)
        setIsConquered(false)
    }

    return (
        <div className="App">
            <MainDiv src={bg}>
                <h1>Вась привет</h1>

                <div style={{display: 'flex', alignItems: 'center', padding: '5px', margin: '10px'}}>
                <StyledButton onClick={handlerConquerWorld} background={'#8787d3'}>завоевать мир</StyledButton>
                <StyledButton onClick={handlerResetConquerWorld} background={'#8ecdec'}>заново завоёвывать мир</StyledButton>
                </div>

                <div style={{display: 'flex', alignItems: 'center', padding: '5px', margin: '10px'}}>
                    <StyledText isConquered={isConquered ? 'block' : 'none'} >Мир завоёван: {world} раз</StyledText>

                </div>



            </MainDiv>
        </div>
    );
}

export default App;
