import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import s from './StatisticsList.module.css';
import rgb from './randomColor';

function StatisticsList({ stats }) {
  return (
    <ul className={s.container}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={s.item}
          style={{ backgroundColor: `${rgb(0, 255)}` }}
        >
          <StatisticsItem label={stat.label} percentage={stat.percentage} />
        </li>
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
