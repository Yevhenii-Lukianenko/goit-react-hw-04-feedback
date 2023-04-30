import PropTypes from 'prop-types';
import { ButtonsList, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(name => {
        return (
          <Item key={name}>
            <Button onClick={() => onLeaveFeedback(name)}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Button>
          </Item>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
