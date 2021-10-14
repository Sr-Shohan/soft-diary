import reactDom from 'react-dom';
import ContentPage from './Content';
import { Route } from 'react-router-dom';

export default function CardRouter({route}){
    
    return (
        <Route exact path={`/${route}`} component={(props)=>{reactDom.render(<ContentPage {...props}/>,document.getElementById('root'))}}/>
    );
}