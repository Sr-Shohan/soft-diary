import SubList from './SubList';
import './list.css';
import { Link } from 'react-router-dom';
export default function List({isCollapse}){
    const navMenu=[
        {
            "title": "topic1",
            "subject": "Mobile App Testing",
        },
        {
            "title": "topic2",
            "subject": "Web App Testing",
        },
        {
            "title": "topic3",
            "subject": "API Testing",
            "subTopic": ["What is automation testing","Application of Automation", "Importance of Automation"]
        }
    ];
    const list=navMenu.map(
        (value)=>{
            if(value.subTopic!==undefined){
                
                return (<SubList list={value.subTopic} title={value.title} subject={value.subject}/>);
            }else{
                return (<li><Link to={`/subject/${value.subject}/${value.title}`}>{value.title}</Link></li>);
            }
        }
        );
    return (
        <ul className={isCollapse?'lister_hidden':'lister'}>
            {list}
        </ul>
    );
};