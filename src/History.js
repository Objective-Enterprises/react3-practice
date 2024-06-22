import { useContext } from "react"
import HistoryQuestion from "./HistoryQuestion"
import { context } from "./context"

export default function History () {
  const value = useContext(context)
  const questionViews = value.questions.map((question, index) => {
    const number = index + 1
    return (
      <HistoryQuestion
        key={number}
        number={number}
        first={question.first}
        second={question.second}
        answer={question.answer}
        correct={question.correct}
      />
    )
  })
  return (
    <>
      <h2>History</h2>
      {questionViews}
    </>
  )
}