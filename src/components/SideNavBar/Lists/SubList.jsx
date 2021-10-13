import { useState } from "react";

export default function SubList({list,title}){
    let lists=null;
    let lister=[];
    for(let value in list){
        lister.push(list[value]);
    }
    console.log(lister);
   if(list){
    lists=lister.map((value)=> {(<li><a href='#'>{value}</a></li>)});
   }
   console.log(lists);
    const [isToggle, setToggle] = useState(false);
    
    const handleToggle= ()=>{
        isToggle? setToggle(false): setToggle(true);
    }
    
    return(
        <>
        <div className='toggleButtonContainer'><button onClick={()=>handleToggle()} className='toogleButton'>{title}</button></div>
        <li>
            {isToggle?<ul>{lists}</ul>:''}     
        </li>
        </>
    );
};
