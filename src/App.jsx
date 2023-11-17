import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });


  const isInputValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: parseInt(newValue)
      }
    });
  }


  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} onChange={handleChange}></UserInput>
      {!isInputValid && <p className="center">Please enter a duration greater than zero.</p>}
      {isInputValid && <Results input={userInput}></Results>}
    </>
  )
}

export default App
