import './App.css';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import Info from './components/Info/Info';

function App() {
    return (
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/info'} component={Info} />
            </Switch> 
    );
}

export default App;