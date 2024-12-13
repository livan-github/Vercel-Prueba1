import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
    const [items, setItems] = useState([]);

    const handleNewItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1>Item Manager</h1>
            <ItemForm onNewItem={handleNewItem} />
            <ItemList />
        </div>
    );
};

export default App;
