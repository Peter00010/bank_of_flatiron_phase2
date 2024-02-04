import React, { useState, useEffect } from 'react';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then(response => response.json())
            .then(data => {
                setTransactions(data);
            })
            .catch(error => {
                console.error('Error fetching transactions:', error);
            });
    }, []);

    const filteredTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleDeleteTransaction = id => {
        fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
                setTransactions(updatedTransactions);
                console.log('Transaction deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting transaction:', error);
            });
    };

    return (
        <div className='container'>
            <h2>Transactions</h2>
            <input className='search-bar'
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search transactions..."
            />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                            <td>
                                <button className='deletebtn' onClick={() => handleDeleteTransaction(transaction.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionList;
