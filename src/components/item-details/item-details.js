import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/index';

import './item-details.css';

const Records = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Records}

export default class ItemDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            item: null,
            loading: true,
            image: null
        }
        this.swapiServer = new SwapiService();
    }

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if(prevProps.itemId !== this.props.itemId){
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }

    updateItem(){
        const {itemId, getData, getImageUrl} = this.props
        if(!itemId){
            return
        }
        getData(itemId).then(item => {
            this.setState({
                item,
                loading: false, 
                image: getImageUrl(itemId)
            })
        })
    }

    render(){
        if(!this.state.item){
            return <span>Select a item from a list</span>
        }
        const {item, loading, image} = this.state
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <ItemDetailsView item={item} img={image} {...this.props}/> : null;

        return(
            <div className="person-details card">
                {spinner}
                {content}
            </div>
        )
    }
}

const ItemDetailsView = ({item, img, ...props}) => {
    const {name} = item

    return (
        <React.Fragment>
            <div className="person-img">
                <img src={img} alt="item"/>
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, {item});
                    })
                }
                </ul>
            </div>
        </React.Fragment>
    )
}