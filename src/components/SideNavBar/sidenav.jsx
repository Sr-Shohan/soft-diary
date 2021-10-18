import React, { useState } from "react";
import './sideNav.css';
import List from './Lists/List';
function SideNav(){
    const [isCollapse,setCollapse] = useState(false);
    let handleClick=()=>{
        if(isCollapse){
            setCollapse(false);
        }else{
            setCollapse(true);
        }
    };

    
    return (
            <div className={isCollapse?'navHide': 'listContainer'}>
            <div>
                <button className='collapse_btn' onClick={()=>handleClick()}><i class={isCollapse?'fa fa-angle-right': 'fa fa-angle-left'} ></i></button>
            </div>
                <List isCollapse={isCollapse}/>
            </div>
    );
};

export default SideNav;