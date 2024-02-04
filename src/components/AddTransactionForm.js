import React, { useState } from 'react';
import axios from 'axios';

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
            // Send POST request to add the new transaction
            const response = await axios.post('http://localhost:3000/transactions', newTransaction);
            console.log('Transaction added successfully:', response.data);

            // Clear form fields
            setDescription('');
            setCategory('');
            setAmount('');

            // Pass the newly added transaction data to the parent component
            onAddTransaction(response.data);
        } catch (error) {
            console.error('Error adding transaction:', error);
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
