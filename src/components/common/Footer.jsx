import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="divFooterContainer">
                <div className="divFooterContainerIn">
                    <h3>Pages</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
                <div className="divFooterContainerIn">
                    <h3>Find Us</h3>
                    <ul>
                        <li><a href="#">What we do</a></li>
                        <li><a href="#">Address</a></li>
                        <li><a href="#">Phone</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="divFooterContainerIn">
                    <h3>Latest Post</h3>
                    <ul>
                        <li><a href="#">Why we love tech</a></li>
                        <li><a href="#">Why we love design</a></li>
                        <li><a href="#">Why to use Laravel</a></li>
                        <li><a href="#">Why React is the best</a></li>
                    </ul>
                </div>
                <div className="divFooterContainerOut">
                    <p>Copyright 2017-2021 Code with Sy Hoang. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;