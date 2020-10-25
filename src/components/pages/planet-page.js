import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundry from '../error-boundry/index';
import Row from '../row/index';
import {PlanetList, PlanetDetails} from '../sw-components/index';

const PlanetPage = ({match, history}) => {
    const { id } = match.params
    return (
        <ErrorBoundry>
            <Row 
                left={<PlanetList onItemSelected={(itemId) => history.push(itemId)}/>} 
                rigth={<PlanetDetails selectedItem={id}/>}
            />
        </ErrorBoundry>
    )
}

export default withRouter(PlanetPage)