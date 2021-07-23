import './styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Stories from '../Stories';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/stories" component={Stories} />
                    <Route exact path="/" component={Home} /> 
                </Switch>
            </Router>
        </>
    );
}

export default App;
