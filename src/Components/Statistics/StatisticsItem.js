import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';
import rgb from './randomColor';

const StatisticsItem = ({ id, label, percentage }) => {
  return (
    <li className={s.item} style={{ backgroundColor: `${rgb(0, 255)}` }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

// const StatisticsItem = ({ label, percentage }) => {
//   return (
//     <div className={s.item}>
//       <span className={s.label}>{label}</span>
//       <span className={s.percentage}>{percentage}%</span>
//     </div>
//   );
// };

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
