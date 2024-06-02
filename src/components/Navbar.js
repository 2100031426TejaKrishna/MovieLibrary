import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ playlist = [] }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="page">
      <nav style={styles.navbar}>
        <div className="container" style={styles.container}>
          <Link to="/HomePage" style={{ textDecoration: 'none' }}>
            <h1 style={{ ...styles.logo, ...styles.logoButton }}>Movie Library</h1>
          </Link>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/tollywood" style={styles.button}>Tollywood</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/kollywood" style={styles.button}>Kollywood</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/bollywood" style={styles.button}>Bollywood</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/playlist" style={styles.button}>
                Playlist ({playlist.length})
              </Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/" style={styles.button}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: 'rgba(173, 216, 230, 0.8)',
    padding: '20px 0',
    position: 'absolute',
    width: '100%',
    top: '70px',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'black',
    margin: 0,
  },
  logoButton: {
    fontSize: '18px',
    color: 'black',
    fontFamily: 'inherit',
    fontWeight: 800,
    cursor: 'pointer',
    position: 'relative',
    border: 'none',
    background: 'none',
    textTransform: 'uppercase',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    transitionDuration: '400ms',
    transitionProperty: 'color',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  searchForm: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
  },
  searchButton: {
    padding: '5px 10px',
    marginLeft: '5px',
    borderRadius: '5px',
    border: 'none',
    background: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
  button: {
    height: '35px',
    margin: '5px',
    width: '100px',
    background: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontFamily: 'Consolas, Courier New, monospace',
    border: 'solid #404c5d 1px',
    fontSize: '16px',
    color: 'rgb(161, 161, 161)',
    transition: '500ms',
    borderRadius: '5px',
    background: 'linear-gradient(145deg, #2e2d2d, #212121)',
    boxShadow: '-1px -5px 15px #41465b, 5px 5px 15px #41465b, inset 5px 5px 10px #212121, inset -5px -5px 10px #212121',
    textDecoration: 'none',
  }
};

export default Navbar;
