import Quiz from "./Quiz"
import History from "./History"
import { Routes, Route, Link, Router } from 'react-router-dom'
import { Provider } from "./context"
import HistoryQuestionPage from "./HistoryQuestionPage"

export default function App() {
  return (
    <>
      <h1>Quiz App</h1>
      <div>
        <Link to='/'>Quiz</Link>
      </div>
      <div>
        <Link to='/history'>History</Link>
      </div>
      <Provider>
        <Routes>
          <Route
            path='/'
            element={<Quiz />}
          />
          <Route
            path='/history'
            element={<History />}
          />
          <Route
            path='/question/:questionNumber'
            element={<HistoryQuestionPage />}
          />
        </Routes>
      </Provider>
    </>
  )
}