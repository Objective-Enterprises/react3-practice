import { useContext } from "react"
import { context } from "./context"
import { Link } from 'react-router-dom'

export default function HistoryQuestion (props) {
  const value = useContext(context)
  const status = props.correct ? 'Correct' : 'Incorrect'
  const to = `/question/${props.number}`
  return (
    <>
      <h3>Question #{props.number}/{value.questions.length} ({status})</h3>
      <Link to={to}>
        {props.first} + {props.second} = {props.answer}
      </Link>
    </>
  )
}