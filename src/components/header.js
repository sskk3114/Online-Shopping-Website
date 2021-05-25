import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {subject} from '../services/subject';
import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

function Header(props) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    let history = useHistory();
    console.log(props);
    const navLinks = [
        {name: 'Home', link: ''},
        {name: 'Products', link: ''},
        {name: 'Login', link: ''}
    ];
    const clickedOnHome = () => {
        console.log('Triggered in clicked on home method');
    };
    const logout = () => {
        history.push('/login');
        subject.next('User Logout out');
    }
    subject.subscribe( res => {
        if (res === 'User Logged In') {
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }
    });
    useEffect(() => {
        // Will be triggered when component is mounted and updated in tree.
        console.log(isUserLoggedIn);



        return () => {
            // will be triggered when component unmounted from tree.
            console.log('header is unmounted');
            // subject.unsubscribe();
        }
        // For value changes of parameters 
    }, [isUserLoggedIn]);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" ><img src={logo} alt={'Digital Lync'} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={'/'}>{navLinks[0].name}</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/products'} >Products</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/employees'} >Employees</Link>
                        </li>
                        {isUserLoggedIn ? (
                            <React.Fragment></React.Fragment>
                            ) : (
                                <li className="nav-item">
                                <Link className="nav-link" to={'/register'} >Register</Link>
                            </li>
                        )}
                        
                        <li className="nav-item">
                            <Link className="nav-link" to={'/users'} >Users</Link>
                        </li>
                        {isUserLoggedIn ? (
                            <li className="nav-item" onClick={logout}><span className="nav-link">
                                Logout
                            </span>
                            </li>) : (
                            <li className="nav-item">
                            <Link className="nav-link" to={'/login'} >Login</Link>
                            </li>
                        )} 
                        <li className="nav-item">
                            <Link className="nav-link" to={'/cart'} >Cart</Link>
                        </li>  
                        <li className="nav-item">
                            <Link className="nav-link" to={'/my-orders'} >My Orders</Link>
                        </li> 
                        <li className="nav-item">
                            <Link className="nav-link" to={'/my-profile'} >Profile</Link>
                        </li>                     
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" >Action</a></li>
                            <li><a className="dropdown-item" >Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" >Something else here</a></li>
                        </ul>
                        </li> */}                        
                    </ul>
                    
                </div>
        </div>
    </nav>
    );
}

export default Header;