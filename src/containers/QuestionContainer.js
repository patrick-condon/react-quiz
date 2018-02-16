import React from 'react';
import AnswerTile from '../components/AnswerTile';
import FetchButton from '../components/FetchButton';
import NextButton from '../components/NextButton'

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: null,
      clicked: 0,
      data: null,
      questionId: 1
    }
    this.setCorrect = this.setCorrect.bind(this)
    this.setClicked = this.setClicked.bind(this)
    this.getData = this.getData.bind(this)
    this.setQuestion = this.setQuestion.bind(this)
  }

  setCorrect(answer) {
    this.setState( {correct: answer} )
  }
  setClicked(id) {
    this.setState( {clicked: id} )
  }
  setQuestion() {
    let random = Math.floor((Math.random() * 4) + 1)
    this.setState( {questionId: random} )
  }
  getData() {
    fetch('api/v1/questions.json')
    .then(r => r.json())
    .then(data => {
      // console.log(data)
      this.setState( {data: data} );
    })
  }

  render(){
    let result
    let color
    let answers
    let question
    let nextButton
    let nextClick
    if (this.state.data) {
      nextClick = () => {
        this.setQuestion()
        this.setCorrect(null)
        this.setClicked(0)
      }
      nextButton = <NextButton nextClick={nextClick}/>
      let selectedQuestion = this.state.questionId
      let answersArray = this.state.data.answers
      question = this.state.data.questions[selectedQuestion - 1].body
      if (this.state.correct === true) {
        result = 'Correct!'
        color = 'correct'
      } else if (this.state.correct === false) {
        result = 'Incorrect'
        color = 'incorrect'
      }
      answers = answersArray.map(answer => {
        if (answer.question_id === selectedQuestion) {
          // debugger
          let className = 'unclicked'
          let checkCorrect = () => {
            this.setCorrect(answer.correct)
            this.setClicked(answer.id)
          }
          if (this.state.clicked === answer.id) {
            className = 'clicked'
          }
          return (
            <AnswerTile
              key={answer.id}
              body={answer.body}
              correct={answer.correct}
              checkCorrect={checkCorrect}
              className={className}
            />
          )
        }
      })
    }
      let buttonClick = () => {this.getData()}
      let button = <FetchButton buttonClick={buttonClick}/>


    return(
      <div className="quiz-body">
        <h1>{question}</h1>

        {answers}

        <p className={color}>{result}</p>

        {button}
        {nextButton}

      </div>
    )
  }

}

export default QuestionContainer;
