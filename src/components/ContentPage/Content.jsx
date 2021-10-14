import {ReactDOM} from 'react';
import {useHistory, Link} from 'react-router-dom';
import SideNav from '../SideNavBar/sidenav';
import NavbarPage from './../NavBar/Nav';
import './Content.css';
export default function CotentPage({match:{params}}){
  
    return (
        <div className='Container'>
            <div className='row'>
                <NavbarPage/>
            </div>
            <div className='content'>
                <div>
                    <SideNav />
                </div>

                <div>
                    <h2>This is content page-{params.subject}</h2>
                </div>

            </div>
        </div>
    );
    
}