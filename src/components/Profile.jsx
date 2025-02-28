import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (isLoggedIn) {
      fetch('/api/orders')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // Get response as text
        })
        .then(text => {
          if (text.startsWith('<!doctype html>')) {
            throw new Error('Received HTML instead of JSON');
          }
          try {
            console.log('Response text:', text); // Log the response text
            const data = JSON.parse(text); // Try to parse JSON
            setOrders(data);
          } catch (error) {
            console.error('Error parsing JSON:', error);
            throw new Error('Invalid JSON response');
          }
        })
        .catch(error => {
          console.error('Error fetching orders:', error);
          setError('Failed to fetch orders. Please try again later.');
        });
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    // Replace with actual login logic
    setIsLoggedIn(true);
    setUser({ name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setOrders([]);
    setUser({ name: '', email: '', phone: '' });
  };

  return (
    <div className="profile-container">
      {isLoggedIn ? (
        <>
          <h2>Profil</h2>
          <ul>
            <li>Namn: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Telefon: {user.phone}</li>
          </ul>
          <button onClick={handleLogout}>Logga ut</button>
          <div className="order-history">
            <h3>Tidigare beställningar</h3>
            {error ? (
              <p>{error}</p>
            ) : (
              <ul>
                {orders.map(order => (
                  <li key={order.id}>
                    <span>Order ID: {order.id}</span>
                    <span>Datum: {order.date}</span>
                    <span>Totalt: {order.total} SEK</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <>
          <h2>Logga in eller skapa konto</h2>
          <button onClick={handleLogin}>Logga in</button>
        </>
      )}
    </div>
  );
};

export default Profile;
