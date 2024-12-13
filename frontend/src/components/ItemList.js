import React, { useState, useEffect } from 'react';

function ItemList() {
    const [items, setItems] = useState([]); // Asegúrate de que es un array vacío por defecto.

    useEffect(() => {
        // Fetching data desde la API
        fetch('http://localhost:5000/api/items') // Aquí deberías poner la URL de tu API
            .then(response => response.json())
            .then(data => setItems(data)) // Asegúrate de que "data" es un array
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    return (
        <div>
            <h1>Item List</h1>
            {/* Verifica si 'items' es un array antes de usar map */}
            {Array.isArray(items) ? (
                items.map(item => (
                    <div key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))
            ) : (
                <p>No items available</p>
            )}
        </div>
    );
}

export default ItemList;
