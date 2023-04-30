import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'helpers/helpers';

export const ProfileStats = ({ label, quantity }) => (
  <li>
    <span className="label">{capitalizeFirstLetter(label)}</span>
    <span className="quantity">{quantity}</span>
  </li>
);

ProfileStats.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
