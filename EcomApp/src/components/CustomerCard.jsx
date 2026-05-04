

function CustomerCard({customer}){


    return(
        <>
            <div className="card">
                <div className="card-img-top">
                    <img  src="favicon.svg" alt="Card image cap"/>
                </div>
                
                <div className="card-body">
                    <h3>{customer.name}</h3>
                    <p>{customer.email}</p>
                </div>
                
            </div>
        </>
    )
}

export default CustomerCard;