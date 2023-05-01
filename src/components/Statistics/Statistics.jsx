import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}

    <ul className={css['stat-list']}>
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
