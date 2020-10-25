import React from 'react';
import ItemDetails, {Records} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helper/index';

const PlanetDetails = (props) => {
    const {selectedItem, getPlanet, getImagePlanet} = props
    return(
        <ItemDetails itemId={selectedItem}
            getData={getPlanet}
            getImageUrl={getImagePlanet}>
            <Records field='model' label='Model'/>
            <Records field='population' label='Population'/>
            <Records field='rotationPeriod' label='Rotation Period'/>
            <Records field='diameter' label='Diameter'/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getPlanet: swapiService.getPlanet,
        getImagePlanet: swapiService.getImagePlanet
    }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);