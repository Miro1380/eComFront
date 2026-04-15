import { useState } from "react";

function ProductList(){
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const getProducts = async () =>{
        if(isLoaded){
            setIsLoaded(false);
            setProducts([]);
            return;
        }

        try {
            const response = await fetch('https://ecom-demo-production-f909.up.railway.app/api/products');
            const data = await response.json();
            console.log("Retrived data: ", data);
            setProducts(data);
            setIsLoaded(true);
        } catch (error) {
            console.log('Error. Something went wrong.');
        }
    }

    return(
        <>
            <div>
                <button className="btn btn-primary m-5" onClick={getProducts}>{isLoaded? 'Hide Products': 'Load Products'} </button>

                {isLoaded && <h2> Product List</h2>}
        
        {
            products.map((product)=> 
                <div key={product.productId}className="list-group mtb-4">
                    <ul>
                        <li className="list-group-item">{product.name} </li>
                        <li className="list-group-item">{product.description} </li>
                        <li className="list-group-item">{product.price} </li>
                        <li className="list-group-item">{product.status} </li>
                    </ul>
                </div>
            )
        }
            </div>
        </>
    )

}

export default ProductList;