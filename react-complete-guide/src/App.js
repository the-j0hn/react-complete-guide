import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {

  // How we do it in javaScript
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible';
  // document.getElementById('root').append(para);
  const expenses = [
    {
      id: 'e1',
      title: 'toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'toilet cleaner',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e3',
      title: 'toilet freshner',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
