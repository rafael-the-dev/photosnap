import './styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home';
import loadable from '@loadable/component';

function App() {
    const Stories = loadable(() => import('../Stories'));
    const Features = loadable(() => import('../Features'));
    const Pricing = loadable(() => import('../Pricing'));

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/stories" component={Stories} />
                    <Route exact path="/features" component={Features} />
                    <Route exact path="/pricing" component={Pricing} />
                    <Route exact path="/" component={Home} /> 
                </Switch>
            </Router>
        </>
    );
}

export default App;
