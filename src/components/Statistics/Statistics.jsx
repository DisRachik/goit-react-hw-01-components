import PropTypes from 'prop-types';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title.toUpperCase()}</h2>}

    <ul className="stat-list">
      {stats.map(stat => (
        <StatisticsItem key={stat.id} stats={stat} />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
