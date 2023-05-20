import { useState } from 'react';
import { Statictics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions/';
import { Notification } from './Notification';
import { Section } from './Section';
import { Wrapper } from './Wrapper.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementReaction = e => {
    const buttonLabel = e.currentTarget.title;
    switch (buttonLabel) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const feedbackReactions = {
    good,
    neutral,
    bad,
  };

  const countTotalFeedback = () => {
    return Object.values(feedbackReactions).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good / countTotalFeedback()) * 100;
    if (!percentage) {
      return 0;
    } else {
      return Math.round(percentage);
    }
  };

  const checkFeedback = () => {
    return Object.values(feedbackReactions).some(value => value !== 0);
  };

  return (
    <Wrapper>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={feedbackReactions}
          onLeaveFeedback={incrementReaction}
        />
      </Section>
      <Section title="Statictics">
        {checkFeedback() ? (
          <Statictics
            options={feedbackReactions}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};
