import React from 'react';
import ItemDetails, {Records} from '../item-details/item-details';
import {withSwapiService} from '../hoc-helper/index';


const PersonDetails = (props) => {
    const {selectedItem, getPerson, getImagePerson} = props
    return(
        <ItemDetails itemId={selectedItem}
            getData={getPerson}
            getImageUrl={getImagePerson}>
            <Records field='gender' label='Gender'/>
            <Records field='birthYear' label='Birth Year'/>
            <Records field='eyeColor' label='Eye Color'/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getPerson: swapiService.getPerson,
        getImagePerson: swapiService.getImagePerson
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);