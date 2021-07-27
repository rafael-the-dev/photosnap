import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.scss';
import Home from '../Home';
import loadable from '@loadable/component';
import { CSSTransition } from 'react-transition-group';

function App() {
    const Stories = loadable(() => import('../Stories'));
    const Features = loadable(() => import('../Features'));
    const Pricing = loadable(() => import('../Pricing')); 

    const routes = [
        { path: '/', name: 'Home', Component: Home },
        { path: '/features', name: 'Features', Component: Features },
        { path: '/pricing', name: 'Pricing', Component: Pricing },
        { path: '/stories', name: 'Stories', Component: Stories }
    ];

    return (
        <>
            <Router>
                {
                    routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            {
                                ({ match }) => (
                                    <CSSTransition 
                                        in={match !== null}
                                        timeout={1000}
                                        classNames="fade"
                                        unmountOnExit
                                    >
                                        <div><Component /></div>
                                    </CSSTransition>
                                )
                            }
                        </Route>
                    ))
                }
            </Router>
        </>
    );
}

export default App;
