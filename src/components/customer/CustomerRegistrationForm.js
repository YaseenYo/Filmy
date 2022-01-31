import React, {useState} from 'react';
import api from "../../api/moviesapi";

const CustomerRegistrationForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");

    const mydata = {
        "firstName": fname,
        "lastName": lname,
        "email": email,
        "dateOfBirth": dateOfBirth,
        "mobile": mobile
      };

    const addCustomer = async () => {
        if(fname === "" || lname === ""|| email === "" || mobile === "" || dateOfBirth === ""){
            alert("Fill all the details...");
            return;
        }

        try {
            await api.post("/customers",mydata);
            alert("Customer Added Successfully 😱");
          } catch (e) {
            console.log(e);
            alert("Submission  unsuccessfull!!!");
          }
    }

    return (
        <div className = "ui form" style = {{margin : "20px"}}>
            <div className = "field">
                <label className = "header">First Name</label>
                <input onChange={(e)=>setFname(e.target.value)} value={fname} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Last Name</label>
                <input onChange={(e)=>setLname(e.target.value)} value={lname} type = "text"/>
            </div>
            <div className = "field">
                <label className = "header">Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type = "email"/>
            </div>
            <div className = "field">
                <label className = "header">Date of Birth</label>
                <input onChange={(e)=>setDateOfBirth(e.target.value)} value={dateOfBirth} type = "date"/>
            </div>
            <div className = "field">
                <label className = "header">Mobile Phone</label>
                <input onChange={(e)=>setMobile(e.target.value)} value={mobile} type = "number"/>
            </div>
            <div style = {{marginBottom : "70px"}} >
                <button onClick={()=>addCustomer()} className = "ui button primary right floated">Submit</button>
            </div>
        </div>
    );
};

export default CustomerRegistrationForm;
