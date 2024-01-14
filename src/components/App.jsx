import { useState, useEffect } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);

  const feedback = {
    good,
    neutral,
    bad,
    total,
    amount,
  };

  useEffect(() => {
    countTotalFeedback(good, neutral, bad);
    countPositiveFeedbackPercentage(good, neutral, bad);
  }, [good, neutral, bad]);

  const countTotalFeedback = (good, neutral, bad) => {
    setTotal(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    setAmount(Math.round((good / (good + neutral + bad)) * 100));
  };

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleIncrement}
          handleReset={handleReset}
        />

        {feedback.total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={amount}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
