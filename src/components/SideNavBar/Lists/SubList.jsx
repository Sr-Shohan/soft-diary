import { useState } from "react";
import { Link } from "react-router-dom";

export default function SubList({list,title,subject}){
    let lists=null;
    let lister=[];
    for(let value in list){
        lister.push(list[value]);
    }

   if(list){
    lists=lister.map((value,idx)=> {return(<li key={idx}><Link to={`/subject/${subject}/${title}/#${value}`} href='#'>{value}</Link></li>)});
   }

    const [isToggle, setToggle] = useState(false);
    
    const handleToggle= ()=>{
        isToggle? setToggle(false): setToggle(true);
    }
    
    return(
        <>
        <div  className='toogleButton'><Link to={`/subject/${subject}/${title}`}>{title}</Link><i onClick={()=>handleToggle()} style={{paddingRight: '10px'}} className={isToggle?'fa fa-angle-up':'fa fa-angle-down'}></i></div>
        <li>
            {isToggle?<ul>{lists}</ul>:''}     
        </li>
        </>
    );
};
