
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

export default Statistics;
