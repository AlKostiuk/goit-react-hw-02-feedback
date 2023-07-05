import PropTypes from 'prop-types';
import style from './statistics.module.css'

import Notification from 'components/Notification/Notification';


const Statistics = ({ items, total, positivePercentage }) => {
  return (
    <div className={style.statisticContainer}>
      {total > 0 ? (
        <>
          <span>Good: {items.good}</span>
          <span>Neutral: {items.neutral}</span>
          <span>Bad: {items.bad}</span>
          <span>Total: {total}</span>
          <span>Positive feedback: {positivePercentage}%</span>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
Statistics.propTypes = {
  items: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
