import { useState } from 'react';
import SubList from './SubList';
import './list.css';
export default function List({isCollapse}){
    const navMenu=[
        {
            'title': 'Web App Testing',
        },
        {
            'title': 'Mobile App Testing',
        },
        {
            'title': 'Automation Testing',
            'subTopic': ['What is automation testing','Application of Automation', 'Importance of Automation']
        }
    ];
    const list=navMenu.map(
        (value)=>{
            if(value.subTopic!==undefined){
                
                return (<SubList list={value.subTopic} title={value.title}/>);
            }else{
                return (<li>{value.title}</li>);
            }
        }
        );
    return (
        <ul className={isCollapse?'lister_hidden':'lister'}>
            {list}
        </ul>
    );
};