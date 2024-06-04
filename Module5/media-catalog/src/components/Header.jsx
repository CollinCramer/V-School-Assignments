import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {




    return(
        <header className="site-header">
            <div className="site-identity">
                <Link to = "/">
                    <h1><a href="#">Media Archive</a></h1>
                </Link>
            </div>  
            <nav className="site-navigation">
                <ul className="nav">
                    <Link to = "/games">
                        <li><a href="#">Video Games</a></li> 
                    </Link>
                    <Link to = "/books">
                        <li><a href="#">Books</a></li> 
                    </Link>
                    <Link to = "/movies">
                        <li><a href="#">Movies</a></li> 
                    </Link>
                </ul>
            </nav>
        </header>
    )
}