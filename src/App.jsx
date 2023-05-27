import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Container } from './Components/Container/Container'
import { Screen } from './Components/Screen/Screen'
import { ButtonArea } from './Components/ButtonArea/ButtonArea'
import { Button } from './Components/Button/Button'

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState(null);
  

  const buttonsArray = ['AC', '/', 'x', 'C', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '.', '=']

  const handleDigit = (value) => {
    if (operator == null) {
      firstNum == 0 ? setFirstNum(value) : setFirstNum(firstNum + value)
    } else {
      secondNum == 0 ? setSecondNum(value) : setSecondNum(secondNum + value)
    }
  }

  const handleOperator = (value) => {
    setOperator(value)

    if (operator == 'C') {
      setFirstNum(0)
      setSecondNum(0)
      setOperator(null)

    }
  }

  const handleEqual = () => {
    let result = 0;

    if (operator !== null) {
      switch (operator) {
        case '+':
          result = Number(firstNum) + Number(secondNum)
          console.log(result);
          break;
        case '-':
          result = Number(firstNum) - Number(secondNum)
          console.log(result);
          break;
        case 'x':
          result = Number(firstNum) * Number(secondNum)
          console.log(result);
          break;
        case '/':
          result = Number(firstNum) / Number(secondNum)
          console.log(result);
          break;
      }
    }
    setFirstNum(result)
    setSecondNum(0)
    setOperator(null)
  }

  const displayPastValues = () => {
    return (
      firstNum == 0 ? '' : firstNum
      &&
      operator == null ? firstNum : `${firstNum} ${operator}`
      &&
      secondNum == 0 ? `${firstNum} ${operator}` : `${firstNum} ${operator} ${secondNum}`
    )
  }
  
  return (
    <>
      <Container>
        <Screen current={firstNum == 0 ? 0 : firstNum} past={displayPastValues()}/>
        <ButtonArea>

            {
              buttonsArray.map((btn) => {
                if (btn == 'AC' || btn == '/' || btn == 'x') {
                  return <Button key={btn} className='button_digit top' value={btn} clickButton={handleOperator} />
                } else if (btn == 'C' || btn == '-' || btn == '+' ) {
                  return <Button key={btn} className='button_digit side' value={btn} clickButton={handleOperator} />
                } else if (btn == '0') {
                  return <Button key={btn} className='button_digit zero' value={btn} clickButton={handleDigit} />
                } else if (btn == '=') {
                  return <Button key={btn} className='button_digit equal' value={btn} clickButton={handleEqual} />
                } else {
                  return <Button key={btn} className='button_digit' value={btn} clickButton={handleDigit} />
                }
                })
            }
        </ButtonArea>
      </Container>
    </>
  )
}

export default App
