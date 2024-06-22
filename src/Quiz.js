import { useState } from "react"
import Question from "./Question"

export default function Quiz () {
  const [ready, setReady] = useState(false)
  if (ready) {
    return (
      <Question />
    )
  }
  function handleYes () {
    setReady(true)
  }
  return (
    <>
      <p>Ready to start the quiz?</p>
      <button onClick={handleYes}>Yes</button>
    </>
  )
}