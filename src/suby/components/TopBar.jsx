import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log('Searching for:', e.target.value); // Replace with actual search logic
  };

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to='/' className='link'>
          <h2>Zomoto Food Online Delivery</h2>
        </Link>
      </div>
      <div className="searchBar">
        <input
          type="text"
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={() => console.log('Searching:', searchQuery)}>Go</button>
      </div>
      <div className="userAuth">
        {isAuthenticated ? (
          <button onClick={handleAuth}>Logout</button>
        ) : (
          <button onClick={handleAuth}>Login / SignUp</button>
        )}
      </div>
    </section>
  );
};

export default TopBar;
