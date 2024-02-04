import React, { useState } from 'react';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import './components/App.css';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [transactions, setTransactions] = useState([]);

    const handleAddTransaction = (newTransaction) =>{
        setTransactions([...transactions, newTransaction]);
    };

    return (
        <div>
            <h1 className='heading'>Bank  Of FlatIron</h1>
            <TransactionList searchTerm={searchTerm} transactions={transactions} /> 
            <AddTransactionForm onAddTransaction={handleAddTransaction} />
        </div>
    );
};

export default App;
