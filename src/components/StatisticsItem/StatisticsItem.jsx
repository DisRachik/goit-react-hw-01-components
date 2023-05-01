import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';
import { getRandomColorScheme } from 'helpers/helpers';

export const StatisticsItem = ({ stats: { label, percentage } }) => {
  const { backgroundColor, textColor } = getRandomColorScheme();

  return (
    <li
      className={css.item}
      style={{ backgroundColor: `${backgroundColor}`, color: `${textColor}` }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
