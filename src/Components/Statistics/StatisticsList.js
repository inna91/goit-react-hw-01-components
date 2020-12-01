import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import s from './StatisticsList.module.css';

function StatisticsList({ stats }) {
  return (
    <ul className={s.container}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
