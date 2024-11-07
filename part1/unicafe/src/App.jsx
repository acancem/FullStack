import { useState } from 'react'

const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
  
}

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <td>{text} {value}</td>
  )
}

const Statistics = (props) => {
  console.log(props.all)
  if(props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } 
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={props.all} />
          </tr>
          <tr>
            <StatisticLine text="average" value={props.average} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={props.positive} />
          </tr>
        </tbody>
      </table>
  </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all ? ((good * 1) + (neutral * 0) + (bad * -1))/all : 0
  const positive = all ? ((good * 1)) * 100 / all : 0

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title title="give feedback" /> 
      <Button handleClick={handleGoodClick} text="good" /> 
      <Button handleClick={handleNeutralClick} text="neutral" /> 
      <Button handleClick={handleBadClick} text="bad" /> 
      <Title title="statistics" /> 
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
         /> 
    </div>
  )
}

export default App