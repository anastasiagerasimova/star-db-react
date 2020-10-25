import React from 'react';
import {Redirect} from 'react-router-dom';

const SecretPage = ({isLoggedIn}) => {
    if(isLoggedIn){
        return(
            <div className="jumbotron text-center">
                <h3>Content for logged in user!</h3>
            </div>
        )
    }

    return (
        // <div className="jumbotron text-center">
        //     <h3>You must logged in to see the page content!</h3>
        // </div>
        <Redirect to="/login" />
    )
}

export default SecretPage;