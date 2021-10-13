import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainComponent from './components/mainComponents';
import ContentPage from './components/ContentPage/Content';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
    <Router>
        <Switch>
            <Route exact path="/" render={(props) => <MainComponent {...props} />} />
            <Route path="/subject/:subject" render={(props) => <ContentPage {...props} />} />
            <Route path="/interview/:subject" render={(props) => <ContentPage {...props} />} />
        </Switch>
    </Router>
  )

}

export default App;
