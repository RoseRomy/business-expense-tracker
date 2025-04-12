import { useState } from 'react';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    description: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount || !formData.description) return;
    setExpenses([formData, ...expenses]);
    setFormData({ name: '', amount: '', description: '' });
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Business Expense Tracker</h1>

      <form onSubmit={handleSubmit} className="expense-form">
        <input
          name="name"
          type="text"
          placeholder="Expense name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount (Ksh)"
          value={formData.amount}
          onChange={handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <input
        type="text"
        placeholder="Search expenses..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount (Ksh)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;