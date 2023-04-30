import PropTypes from 'prop-types';
import { getRandomColorScheme } from 'helpers/helpers';

export const StatisticsItem = ({ stats: { label, percentage } }) => {
  const { backgroundColor, textColor } = getRandomColorScheme();

  return (
    <li
      className="item"
      style={{ backgroundColor: `${backgroundColor}`, color: `${textColor}` }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
