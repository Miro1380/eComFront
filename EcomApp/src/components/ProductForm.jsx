import { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";

function ProductForm(){
    const [product, setProduct] = useState({
        productId:'',
        name:'',
        description:'',
        category: '',
        stockQuantity:'',
        price:''
    })

    const handleChange = (e) => {
        //Destruct product object, use spread to copy changes
        const {name,value} = e.target;
        setProduct(prev => ({...prev, [name]:value}));
    }

    const handleSubmit = async () => {
        console.log("Submitting", product);
        //Make POST call to create product.
        try {
            const response = fetch('https://ecom-demo-production-f909.up.railway.app/api/products', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product)
            });

            if(response.ok){
                console.log("Product info submitted", product);
            }
            
        } catch (error) {
            console.log('Error.Something went wrong');
        }
    };

    return(
        <>
            <Navbar></Navbar>
            <div className="container-md mt-4 mx-8">
                <h2> Add New Product </h2>
                <input className="form-control mb-2" name="productId" placeholder="productId" onChange={handleChange}></input>
                <input className="form-control mb-2" name="name" placeholder="name" onChange={handleChange}></input>
                <input className="form-control mb-2" name="description" placeholder="description" onChange={handleChange}></input>
                <input className="form-control mb-2" name="category" placeholder="category"onChange={handleChange}></input>
                <input className="form-control mb-2" name="stockQuantity" placeholder="Stock quantity"onChange={handleChange}></input>
                <input className="form-control mb-2" name="price" placeholder="price" onChange={handleChange}></input>
                <button className="btn btn-primary" onClick={handleSubmit}> Submit </button>
            </div>

            <ProductList/>
        </>
    )
}

export default ProductForm;