import { Component } from 'react';
import { Statictics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions/';
import { Notification } from './Notification';
import { Section } from './Section';
import { Wrapper } from './Wrapper.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementReaction = e => {
    const buttonLabel = e.currentTarget.title;
    this.setState(prevState => ({ [buttonLabel]: prevState[buttonLabel] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    if (!percentage) {
      return 0;
    } else {
      return Math.round(percentage);
    }
  };

  checkFeedback = () => {
    return Object.values(this.state).some(value => value !== 0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      incrementReaction,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      checkFeedback,
    } = this;

    return (
      <Wrapper>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={state}
            onLeaveFeedback={incrementReaction}
          />
        </Section>
        <Section title="Statictics">
          {checkFeedback() ? (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }
}
