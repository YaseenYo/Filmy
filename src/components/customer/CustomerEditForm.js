import React, { useState,useEffect } from 'react';
import api from "../../api/moviesapi";

const CustomerEditForm = ({customer}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [id, setId] = useState("");
    	
    useEffect(() => {
        setFname(customer != null ? customer.name.split(" ")[0] : "");
        setLname(customer != null ? customer.name.split(" ")[1] : "");
        setEmail(customer != null ? customer.email : "");
        setMobile(customer != null ? customer.mobile : "");
        setId(customer != null ? customer.id : "");
        setDateOfBirth(customer != null ? customer.dateOfBirth.split("T")[0] : "");
    }, [customer]);

    const url = "/customers/" +  id;

    const patchCustomer = async () => {
        try {
            await api.patch(url,mydata);
            await alert("Update Successfull 😱");
            window.location.reload();
          } catch (e) {
            console.log(e);
            alert("update unsuccessfull!!!");
          }
    }

    const mydata = [
        {
          "path": "/firstname",
          "op": "replace",
          "value": fname
        },
        {
            "path": "/lastname",
            "op": "replace",
            "value": lname
        },
        {
            "path": "/email",
            "op": "replace",
            "value": email
        },
        {
            "path": "/mobile",
            "op": "replace",
            "value": mobile
        },
        {
            "path": "/dateofbirth",
            "op": "replace",
            "value": dateOfBirth
        },
      ];

    return (
        <div className = "ui form">
            <div className = "two fields">
                <div className = "field">
                    <label>First Name</label>
                    <input onChange={(e)=>setFname(e.target.value)} value={fname} type = "text" placeholder = "first name"/>
                </div>
                <div className = "field">
                    <label>Last Name</label>
                    <input onChange={(e)=>setLname(e.target.value)} value={lname} type = "text" placeholder = "last name"/>
                </div>
            </div>
            <div className = "two fields">
                <div className = "field">
                    <label>Email Address</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type = "email" placeholder = "mail id"/>
                </div>
                <div className = "field">
                    <label>Mobile</label>
                    <input onChange={(e)=>setMobile(e.target.value)} value={mobile} type = "number" placeholder = "phone number"/>
                </div>
            </div>
            <div className = "two fields">
                <div className = "field">
                    <label>Date of Birth</label>
                    <input onChange={(e)=>setDateOfBirth(e.target.value)} value={dateOfBirth} type = "date" placeholder = "dd-mm-yy"/>
                </div>
            </div>
            <div className ="modal-footer"  style = {{borderTop:0}}>
                    <button type="button" className ="btn btn-sm btn-danger" data-dismiss="modal">Cancel</button>
                    <button onClick={()=>patchCustomer()} type="button" className ="btn btn-sm btn-primary" data-dismiss="modal">Update</button>
            </div>
        </div>
    );
};

export default CustomerEditForm;
