import PropTypes from 'prop-types';
import { Containers } from './Container.styled';

export const Container = ({ children }) => {
  return <Containers>{children}</Containers>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
