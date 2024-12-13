import React, { useState } from 'react';
import { createItem } from '../api';

const ItemForm = ({ onNewItem }) => {
    const [formData, setFormData] = useState({ name: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = await createItem(formData);
        onNewItem(newItem);
        setFormData({ name: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;
