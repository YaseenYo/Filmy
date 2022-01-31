import React, { useState, useEffect } from "react";
import CustomerCard from "./CustomerCard";
import api from "../../api/moviesapi";

const CustomersList = () => {
    const [customers, setCustomers] = useState([]);
    const [activeCustomer, setActiveCustomer] = useState(null);  

    useEffect(() => {
        api.get("/customers").then((response) => {
          setCustomers(response.data);
        });
    }, []);

    const renderedCustomers = customers.map((customer) => {
        return (
            <CustomerCard customer = {customer} key = {customer.id} activeCustomer ={activeCustomer} 
                setActiveCustomer = {setActiveCustomer}/>
        );
    });

    return (
        <div className = "ui stackable grid" style = {{margin:"auto"}}>
            {renderedCustomers}
        </div>
    );
};

export default CustomersList;