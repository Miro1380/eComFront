import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function CustomerForm(){
   const [customer, setCustomer] = useState({
        name: '',
        age: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        const {name,value} = e.target;
        setCustomer(prev => ({...prev,[name]: value}));
    }

    const handleSubmit = async () => {
        console.log("Submitting:" , customer);
        //Sends create new customer request
        try{
            //fetch(url,options)
            const response = await fetch('https://ecom-demo-production-f909.up.railway.app/api/customers', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(customer)
            });

            if(response.ok){
                console.log('Customer info submitted', response);
            }
        } catch(error){
            console.log('Error. Something went wrong');
        }
    };



    //name,age,email,phone,address
    return(
        <>
            <Navbar></Navbar>
            <div className="container-md mt-4 mx-8">
                <h2>Create New Customer</h2>
                <input className="form-control mb-2" name="name" placeholder="name" onChange={handleChange}></input>
                <input className="form-control mb-2" name="age" placeholder="age"onChange={handleChange}></input>
                <input className="form-control mb-2" name="email" placeholder="email" onChange={handleChange}></input>
                <input className="form-control mb-2" name="phone" placeholder="phone" onChange={handleChange}></input>
                <input className="form-control mb-2" name="address" placeholder="address" onChange={handleChange}></input>
                <button className="btn btn-primary" onClick={handleSubmit} onChange={handleChange}>Submit</button>
            </div>
        
        </>
    )

}

export default CustomerForm;