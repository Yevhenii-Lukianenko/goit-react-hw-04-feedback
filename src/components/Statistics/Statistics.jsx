import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, FeedbackType, FeedbackAmount } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>
        <FeedbackType>
          Good: <FeedbackAmount>{good}</FeedbackAmount>
        </FeedbackType>
      </Item>
      <Item>
        <FeedbackType>
          Neutral: <FeedbackAmount>{neutral}</FeedbackAmount>
        </FeedbackType>
      </Item>
      <Item>
        <FeedbackType>
          Bad: <FeedbackAmount>{bad}</FeedbackAmount>
        </FeedbackType>
      </Item>
      <Item>
        <FeedbackType>
          total: <FeedbackAmount>{total}</FeedbackAmount>
        </FeedbackType>
      </Item>
      <Item>
        <FeedbackType>
          Positive feedback:{' '}
          <FeedbackAmount>{Math.floor(positivePercentage)}%</FeedbackAmount>
        </FeedbackType>
      </Item>
    </List>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
