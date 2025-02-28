import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', phone: '', profileImage: '' });
  const [wishlist, setWishlist] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState('');
  const [isEditing, setIsEditing] = useState(false);

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
    setUser({ name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', profileImage: '' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setOrders([]);
    setUser({ name: '', email: '', phone: '', profileImage: '' });
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser(prevState => ({ ...prevState, profileImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress('');
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Save user data to the server or local storage here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="profile-container">
      {isLoggedIn ? (
        <>
          <h2>Profil</h2>
          <div className="profile-image-container">
            <img src={user.profileImage || 'default-profile.png'} alt="Profile" />
            <input type="file" onChange={handleProfileImageChange} />
          </div>
          {isEditing ? (
            <div>
              <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Namn" />
              <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
              <input type="tel" name="phone" value={user.phone} onChange={handleChange} placeholder="Telefon" />
              <button onClick={handleSaveProfile}>Spara</button>
            </div>
          ) : (
            <ul>
              <li>Namn: {user.name}</li>
              <li>Email: {user.email}</li>
              <li>Telefon: {user.phone}</li>
              <button onClick={handleEditProfile}>Redigera</button>
            </ul>
          )}
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
          <div className="wishlist">
            <h3>Önskelista</h3>
            <ul>
              {wishlist.map(item => (
                <li key={item.id}>
                  <span>{item.title}</span>
                  <button onClick={() => setWishlist(wishlist.filter(w => w.id !== item.id))}>Ta bort</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="addresses">
            <h3>Adresser</h3>
            <ul>
              {addresses.map((address, index) => (
                <li key={index}>{address}</li>
              ))}
            </ul>
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              placeholder="Lägg till ny adress"
            />
            <button onClick={handleAddAddress}>Lägg till</button>
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
