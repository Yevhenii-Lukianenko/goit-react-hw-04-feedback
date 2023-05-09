import { useState } from 'react';
import { Container } from './Container/Container';
import { Section } from './Section/Sections';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = name => {
    if (name === 'good') setGood(good + 1);
    else if (name === 'neutral') setNeutral(neutral + 1);
    else if (name === 'bad') setBad(bad + 1);
  };

  const totalFeedback = good + neutral + bad;
  const PositivePercentageFeedback = (good / totalFeedback) * 100;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={PositivePercentageFeedback}
          ></Statistics>
        )}
      </Section>
    </Container>
  );
}
