import PropTypes from 'prop-types';
import { Sections, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Sections>
      <Title>{title}</Title>
      {children}
    </Sections>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};
