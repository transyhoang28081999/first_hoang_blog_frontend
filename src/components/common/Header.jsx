import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
    return (
        <header>
            <div className="divHeaderContainer">
                <div className="divHeaderContainerLeft">
                    <h1>Laravel & Reactjs</h1>
                </div>
                <nav className="divHeaderContainerRight">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/">Login</Link>
                    <Link to="/">Register</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header;