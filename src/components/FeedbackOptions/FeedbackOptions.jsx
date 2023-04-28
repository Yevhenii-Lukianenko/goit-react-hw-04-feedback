import PropTypes from 'prop-types';
import { ButtonsList, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <Item key={option}>
            <Button onClick={onLeaveFeedback}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Button>
          </Item>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
