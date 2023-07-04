
import style from './feedback.module.css'



const FeedBack = ({ clickForFeedback, items }) => {
  const { good, neutral, bad } = items;



  return (
    <div className={style.btnContainer}>

      <button onClick={() => clickForFeedback('good')} type="button" name={good} className={style.feedbackBtn}>
        Good
      </button>
      <button onClick={() => clickForFeedback('neutral')} type="button" name={neutral} className={style.feedbackBtn}>
        Neutral
      </button>
      <button onClick={() => clickForFeedback('bad')} type="button" name={bad} className={style.feedbackBtn}>
        Bad
      </button>
    </div>
  );
};

export default FeedBack;
