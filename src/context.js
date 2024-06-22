import { createContext, useState  } from "react";

export const context = createContext()

export function Provider (props) {
  const [questions, setQuestions] = useState([])
  function addQuestion (first, second, answer, correct) {
    const question = { first, second, answer, correct }
    const newQuestions = [...questions, question]
    setQuestions(newQuestions)
  }
  const value = { questions, addQuestion }
  return (
    <context.Provider value={value}>
      {props.children}
    </context.Provider>
  )
}