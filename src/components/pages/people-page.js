import React from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/index';
import Row from '../row/index';
import {
    PersonList, 
    PersonDetails 
} from '../sw-components/index';

export default class PeoplePage extends React.Component{
    constructor(){
        super();
        this.SwapiService = new SwapiService()
        this.state = {
            selectedPerson: 5
        }
    }

    onPeopleSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render(){
        const {selectedPerson} = this.state;
        return (
            <ErrorBoundry>
                <Row 
                left={<PersonList onItemSelected={this.onPeopleSelected}/>} 
                rigth={<PersonDetails selectedItem={selectedPerson}/>}
                />
            </ErrorBoundry>
        )
    }
}