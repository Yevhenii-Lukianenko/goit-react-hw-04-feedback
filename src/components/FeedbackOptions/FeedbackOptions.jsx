import React from 'react';

import { ButtonsList, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ButtonsList>
      <Item>
        <Button onClick={onLeaveFeedback}>Good</Button>
      </Item>
      <Item>
        <Button onClick={onLeaveFeedback}>Neutral</Button>
      </Item>
      <Item>
        <Button onClick={onLeaveFeedback}>Bad</Button>
      </Item>
    </ButtonsList>
  );
};
