import { Component } from "react";
import FeedbackOptions from  './Feedback/FeedBackOptions'
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";




export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }


 clickForFeedback = (feedbackType) => {
  this.setState((prevState) => ({
    [feedbackType]: prevState[feedbackType] + 1,
  }));
};
countTotalFeedback =({good,neutral,bad}) => good+neutral+bad;


countPositiveFeedbackPercentage = () =>{
  const { good, neutral, bad } = this.state;
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? (good / total) * 100 : 0;
  return Math.round(positivePercentage);
}




  render() {


  return (

    <div
      style={{
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Section title='Please leave feedback'>
      <FeedbackOptions items = {this.state} clickForFeedback ={this.clickForFeedback} />
      </Section>

      <Section title='Statistics'>
      <Statistics items ={this.state} total ={this.countTotalFeedback(this.state)} positivePercentage ={this.countPositiveFeedbackPercentage(this.state)}/>
      </Section>
    </div>
  );
};
}
