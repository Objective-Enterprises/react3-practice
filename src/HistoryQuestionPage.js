import { useContext } from "react"
import { useParams } from "react-router-dom"
import { context } from "./context"
import HistoryQuestion from "./HistoryQuestion"

export default function HistoryQuestionPage () {
  const value = useContext(context)
  const params = useParams()
  console.log('params', params)
  const questionNumber = Number(params.questionNumber)
  console.log('questionNumber', questionNumber)
  const index = questionNumber - 1
  const question = value.questions[index]
  console.log('question', question)
  return (
    <>
      <h2>Question #{params.questionNumber}</h2>
      <HistoryQuestion
        number={questionNumber}
        first={question.first}
        second={question.second}
        total={question.total}
        answer={question.answer}
        correct={question.correct}
      />
    </>
  )
}