import PropTypes from 'prop-types';
import css from './ProfileStats.module.css';
import { capitalizeFirstLetter } from 'helpers/helpers';

export const ProfileStats = ({ label, quantity }) => (
  <li>
    <span className={css.label}>{capitalizeFirstLetter(label)}</span>
    <span className={css.quantity}>{quantity}</span>
  </li>
);

ProfileStats.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
