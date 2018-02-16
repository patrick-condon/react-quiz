import React from 'react';
import QuestionContainer from './QuestionContainer'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div id="wrapper">
        <QuestionContainer
          data={this.props.data}
        />
      </div>
    )
  }
}

export default App
