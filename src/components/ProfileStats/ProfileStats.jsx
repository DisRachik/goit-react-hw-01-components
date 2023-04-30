import { capitalizeFirstLetter } from 'helpers/helpers';
import PropTypes from 'prop-types';

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
