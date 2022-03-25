import '../styles/header.css';
import Nav from "../NavTabs.js";
import React from "react";

export default function Header() {
    return (
    <header className="header">
        <h1>Colin's Portfolio</h1>
        <nav>
            {Nav}
        </nav>
    </header>
    );
}
    