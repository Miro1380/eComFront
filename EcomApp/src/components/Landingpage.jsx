import Navbar from "./Navbar";

function LandingPage(){

    return(
    <>
        <Navbar></Navbar>
        <div className="text-center">
            <h3 className="display-2 mx-auto bg-light mt-3">Ecom Demo Homepage</h3>
            <p>This is the homepage with three links at the top. Each one allows you to make a request to add a new customer,product,order.</p>
            <p> Each link will take you to the respective viewing page. e.g. The 'add product' page will also allow you to view the current products available.</p>
        </div>
        

        
    </>
    )

}

export default LandingPage;