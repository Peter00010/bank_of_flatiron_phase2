import React, { useState } from 'react';

const AddTransactionForm = ({ onAddTransaction }) => {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
        const newTransaction = {
            date: new Date().toISOString().slice(0, 10),
            description,
            category,
            amount: parseFloat(amount)
        };

        try {
            const response = await fetch('http://localhost:3000/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTransaction),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Transaction added successfully to the backend:', data);

            onAddTransaction(data);

            // Clear form fields
            setDescription('');
            setCategory('');
            setAmount('');
        } catch (error) {
            console.error('Error adding transaction to the backend:', error);
        }
    };

    return (
        <div className='form-group'>
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
                <label>Description:</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} required /><br />
                <label>Category:</label>
                <input type="text" value={category} onChange={e => setCategory(e.target.value)} required /><br />
                <label>Amount:</label>
                <input className='amount' type="number" value={amount} onChange={e => setAmount(e.target.value)} required /><br />
                <button className= "add" type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransactionForm;
