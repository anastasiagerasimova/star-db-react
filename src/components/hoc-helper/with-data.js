import React from 'react';
import Spinner from '../spinner/index';
import ErrorIndicator from '../error-indicator/index';

const withData = (View) => {
    return class extends React.Component{
        constructor(){
            super();
            this.state = {
               data: null,
               loading: true,
               error: false
            };
        }
    
        componentDidMount(){
            this.update();
        }

        // componentDidUpdate(prevProps){
        //     if (this.props.getData !== prevProps.getData) {
        //         this.update();
        //     }
        // }

        update(){
            this.setState({
                loading: true,
            })
            this.props.getData()
                .then(data => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    });
                });
        }

        render(){
            const {data, loading, error} = this.state
            if(loading){
                return <Spinner />
            }
            if(error){
                return <ErrorIndicator />
            }
            return(
                <View {...this.props} itemList={data}/>
            )
        }   
    } 
}

export default withData;