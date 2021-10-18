import {ReactDOM} from 'react';
import { Switch, Route} from 'react-router-dom';
import SideNav from '../SideNavBar/sidenav';
import NavbarPage from './../NavBar/Nav';
import './Content.css';
//import content section
import ContentSection from './ContentSection';
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
                        {/* <h2>This is content page-{params.subject}</h2> */}
                        <Switch>
                            <Route path={`/subject/${params.subject}/:topic`}>
                                <ContentSection />
                            </Route>
                        </Switch>
                    </div>

                </div>
            
        </div>
       
    );
    
}