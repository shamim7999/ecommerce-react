import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const  NewSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar${isSidebarOpen ? ' active' : ''}`} id="sidebar">
        <div className="sidebar-header">
          <FontAwesomeIcon icon={faTimes} onClick={toggleSidebar} />
        </div>
        <div className="sidebar-content">
          <h2>Sidebar Content</h2>
          <p>This is the sidebar content.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-5">
        <h2>Main Content</h2>
        <p>This is the main content area.</p>
      </div>
    </>
  );
}

export default NewSidebar;
