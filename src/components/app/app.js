import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../header/index';
import RandomPlanet from '../random-planet/index';
import SwapiService from '../../services/swapi-service';
import {PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage} from '../pages/index';
import ErrorIndicator from '../error-indicator/index';
import {SwapiServiceProvider} from '../swapi-service-context/index';
import {StarshipDetails} from '../sw-components/index';
import './app.css';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError:false,
            isLoggedIn: false
        }
        this.swapiService = new SwapiService()
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    render(){
        const {isLoggedIn} = this.state
        if(this.state.hasError){
            return <ErrorIndicator />;
        }
        return(
            <Router>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="app">
                        <Header />
                        <RandomPlanet />
                        <Switch>
                            <Route path="/" exact render={() => {}}/>
                            <Route path="/people/" component={PeoplePage}/>
                            <Route path="/planents/:id?" component={PlanetPage}/>
                            <Route path="/starships/" exact component={StarshipPage}/>
                            <Route path="/starships/:id" 
                                    render={({match, location, history}) => {
                                        const { id } = match.params
                                        return <StarshipDetails selectedItem={id}/>
                                    }
                                }
                            />
                            <Route path="/secret" render={() => (
                                <SecretPage isLoggedIn={isLoggedIn}/>
                            
                            )}/>
                            <Route path="/login" render={() => (
                                <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>
                            )}/>
                            <Route render={()=>(
                                <div className="jumbotron text-center">
                                    <h3>Page not found!</h3>
                                </div>
                            )}/>
                        </Switch>
                    </div>
                </SwapiServiceProvider>
            </Router>
        )
    }
}
