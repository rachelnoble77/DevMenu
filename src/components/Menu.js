import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
    
        }
    }    

    render() {
        console.log( this.props.tableNumber)
        return (
            <div className='Wrap-Menu'>
                <div className= 'top'>
                        <div className='dev'>DevMENU</div>
                   <div className='fork'>
                    <img src='http://renewecoblasting.com/wp-content/uploads/2016/05/blackline.png' width='15%' height='3%'/> 
                    &nbsp; &nbsp;
                    <img src ='http://www.clker.com/cliparts/A/D/6/r/B/X/gray-silverware-hi.png' width='3%' height='5%'/>
                    &nbsp; &nbsp;
                    <img src='http://renewecoblasting.com/wp-content/uploads/2016/05/blackline.png' width='15%' height='3%'/>
                    </div>
                </div>
               <div className='dessert111'>
                    <div className='dessert1'><Link className='Link-menu' to='/drinks'>Drinks</Link></div>
                    <div className='dessert2'><Link className='Link-menu' to ='/appetizers'>Appetizers</Link></div>
                    <div className='dessert3'><Link className='Link-menu' to ='/salads'>Salads</Link></div>
                    <div className='dessert4'><Link className='Link-menu' to ='/entrees'>Entrees</Link></div>
                    <div className='dessert5'><Link className='Link-menu' to ='/desserts'>Desserts</Link></div>
               </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        tableNumber: state.tableNumber
    }
}

export default connect(mapStateToProps)(Menu);