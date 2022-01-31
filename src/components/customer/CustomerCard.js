import React from 'react';
import Modal from '../Modal';
import "./customercard.css";
import CustomerEditForm from './CustomerEditForm';

const CustomerCard = ({customer,setActiveCustomer,activeCustomer}) => {
    if(!customer.uniqueKey){
        customer.uniqueKey = "yo10298374";
    }

    return (
        <div className = "ui card customercard_card">
            <div className = "content customercard_cardtop">
                <div className = "header">{customer.name}</div>
            </div>
            <div className = "content">
                <div className = "ui celled list">
                    <div className = "item">
                        Email :
                        <span className = "content right floated">{customer.email}</span>
                    </div>
                    <div className = "item">
                        Mobile :
                        <span className = "content right floated">{customer.mobile}</span>
                    </div>
                    <div className = "item">
                        Birth :
                        <span className = "content right floated">{customer.dateOfBirth}</span>
                    </div>
                    <div className = "item">
                        Registered :
                        <span className = "content right floated">{customer.registrationDate}</span>
                    </div>
                </div>
            </div>
            <div className = "extra content" style = {{background : "whitesmoke"}}>
                <div className = "right floated">
                    <button onClick={()=>setActiveCustomer(customer)} type="button" className ="ui tiny button primary" data-toggle="modal" data-target="#myModal" style = {{padding : "5px"}}>
                        Edit
                        <i className = "edit icon" style = {{marginLeft : "5px"}}/>
                    </button>
                    <div className ="modal" id="myModal">
                        <Modal title = "Edit Customer">
                            <CustomerEditForm customer = {activeCustomer}/>
                        </Modal>
                    </div> 
                </div>
                <div className = "ui tiny red label">{customer.uniqueKey}</div>
            </div>
        </div>
    );
};

export default CustomerCard;
