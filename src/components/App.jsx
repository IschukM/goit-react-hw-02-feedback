import { Component } from 'react';
import { Section } from './Section/Section';
import { Feedback } from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateIncrement = event => {
    this.setState(prevState => {
      switch (event.target.innerText) {
        case 'Good':
          return { good: prevState.good + 1 };
        case 'Neutral':
          return { neutral: prevState.neutral + 1 };
        case 'Bad':
          return { bad: prevState.bad + 1 };
        default:
          return;
      }
    });
  };
  render() {
    return (
      <>
        <Section title="Feedback">
          <Feedback feedback={this.state} onIncrement={this.stateIncrement} />
        </Section>
        <Section title="Statistics"></Section>
      </>
    );
  }
}
