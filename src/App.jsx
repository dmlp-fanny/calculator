import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Container } from './Components/Container/Container'
import { Screen } from './Components/Screen/Screen'
import { ButtonArea } from './Components/ButtonArea/ButtonArea'
import { Button } from './Components/Button/Button'

function App() {
  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')

  const buttonsArray = ['AC', '%', 'x', 'C', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '.', '=']

  const clickButton = (value) => {
    setFirstNum(firstNum + value)

    setSecondNum(secondNum + value)

  }
  
  

  return (
    <>
      <Container>
        <Screen value='0'/>
        <ButtonArea>

            {
              buttonsArray.map((btn) => {
                if (btn == 'AC' || btn == '%' || btn == 'x') {
                  return <Button key={btn} className='button_digit top' value={btn} clickButton={clickButton} />
                } else if (btn == 'C' || btn == '-' || btn == '+' ) {
                  return <Button key={btn} className='button_digit side' value={btn} clickButton={clickButton} />
                } else if (btn == '0') {
                  return <Button key={btn} className='button_digit zero' value={btn} clickButton={clickButton} />
                } else if (btn == '=') {
                  return <Button key={btn} className='button_digit equal' value={btn} clickButton={clickButton} />
                } else {
                  return <Button key={btn} className='button_digit' value={btn} clickButton={clickButton} />
                }
                })
            }
        </ButtonArea>
      </Container>
    </>
  )
}

export default App
