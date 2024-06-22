import { useRef, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { context } from "./context"

export default function Question () {
  console.log('rendering question')
  const value = useContext(context)
  const navigate = useNavigate()
  const answerRef = useRef('')
  function handleAnswerChange (event) {
    answerRef.current = event.target.value
  }
  const first = Math.floor(Math.random() * 10)
  const second = Math.floor(Math.random() * 10)
  function handleSubmit () {
    const answerNumber = Number(answerRef.current)
    const total = first + second
    const correct = total === answerNumber
    value.addQuestion(first, second, answerNumber, correct)
    navigate('/history')
  }
  return (
    <p>
      {first} + {second} = <input onChange={handleAnswerChange} />
      <button onClick={handleSubmit}>Submit</button>
    </p>
  )
}