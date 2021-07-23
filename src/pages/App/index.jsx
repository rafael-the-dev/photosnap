import './styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import loadable from '@loadable/component';

function App() {
    const Stories = loadable(() => import('../Stories'));
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
