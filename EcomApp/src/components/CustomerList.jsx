import { useState } from "react";
import CustomerCard from "./CustomerCard";

function CustomerList(){
    const [customers, setCustomers]= useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getCustomers = async () =>{
        //Checks isLoaded and toggles,empties customer list. Used to hide list.
        if(isLoaded){
            setIsLoaded(false);
            setCustomers([]);
            return;

        }
        try {
            const response = await fetch("https://ecom-demo-production-f909.up.railway.app/api/customers");
            const data = await response.json();
            console.log(data);
            setCustomers(data);
            setIsLoaded(true);
        }
         catch (error) {
            console.log('Error. Something went wrong.');
        }
    }

    return(
        <>
           <div>

            <button className="btn btn-primary m-4" onClick={getCustomers}> {isLoaded? 'Hide Customers': 'Load Customers'} </button>
            
            {/*
                Check isLoaded and displays customer list when true
            */
                isLoaded && <h2>Customers </h2>
            }
            <div className="customer-grid">
                {                
                customers.map((customer) => (
                   <CustomerCard key={customer.customerId} customer={customer}/>
                ))
            }
            </div>
            
           </div>
        </>
    );
}

export default CustomerList;