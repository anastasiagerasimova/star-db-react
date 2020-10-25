import React from 'react';
import ItemDetails, {Records} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helper/index';

const StarshipDetails = (props) => {
    const {selectedItem, getStarShips, getImageStarShip} = props
    return(
        <ItemDetails itemId={selectedItem}
            getData={getStarShips}
            getImageUrl={getImageStarShip}>
            <Records field='model' label='Model'/>
            {/* <Records field='manufacturer' label='Manufacturer'/> */}
            <Records field='length' label='Length'/>
            <Records field='passengers' label='Passengers'/>
        </ItemDetails>
    )
};
const mapMethodsToProps = (swapiService) => {
    return {
        getStarShips: swapiService.getStarShips,
        getImageStarShip: swapiService.getImageStarShip
    }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);