import React from 'react';
import ItemDetails, {Records} from '../item-details/index';
import {SwapiServiceConsumer} from '../swapi-service-context/swapi-service-context';

const PersonDetails = ({selectedItem}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getPerson, getImagePerson}) => {
                    return (
                        <ItemDetails itemId={selectedItem}
                            getData={getPerson}
                            getImageUrl={getImagePerson}>
                                <Records field='gender' label='Gender'/>
                                <Records field='birthYear' label='Birth Year'/>
                                <Records field='eyeColor' label='Eye Color'/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
const StarshipDetails = () => {};
const PlanetDetails = () => {};

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
}