import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function OrderForm(){
    const [products,setProducts] = useState([]);
    const [customers,setCustomers] = useState([]);

    const [order, setOrder] = useState({
        productId: '',
        customerId:'',
        quantity:'',
        price:''
    });

    useEffect(() => {
    fetch('https://ecom-demo-production-f909.up.railway.app/api/products')
        .then(r => r.json())
        .then(data => {
            //console.log('First product:', data[0]); // 👈 see exact field names
            setProducts(data);
        });
    fetch('https://ecom-demo-production-f909.up.railway.app/api/customers')
        .then(r => r.json())
        .then(data => {
            //console.log('First customer:', data[0]); // 👈 see exact field names
            setCustomers(data);
        });
}, []);


    const handleChange = (e) => {
        const{name,value} = e.target;
        console.log('handleChange:', name, value);
        setOrder(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async () =>{
        console.log('Submiting order:', order);
        customers.map((customer) => (console.log(customer.customerId)));

        //Make POST req with 
        try {
            const response = await fetch('https://ecom-demo-production-f909.up.railway.app/api/orders',{
            method:'POST',
            headers:{'Content-Type':'application/json'
            },
            body:JSON.stringify({...order,
                quantity:parseInt(order.quantity),
                price: parseFloat(order.price)
            })
            });

            if(response.ok){
                const errorBody= await response.text();
                console.log('Order Submitted: ', order);
            }
            
        } catch (error) {
            console.log('Error,something went wrong');
        }
    }

    const handleProductChange = (e) => {
        
        console.log('selected value:', e.target.value);
        console.log('products:', products.map(p => p.productId));
        const selectedProduct = products.find(p => p.productId === e.target.value);
        console.log('found product:', selectedProduct);        
        setOrder(prev => ({
            ...prev,
            productId: e.target.value,
            price: selectedProduct ? selectedProduct.price : ''
        }));

        
    }
    
    return (
        <>
        <Navbar></Navbar>
            <div className="container mt-3">
                <h2>Make New Order</h2>

                <div className="mb-3">    
                    <label>Customer</label>            
                    <select className="form-select" name="customerId" onChange={handleChange} value={order.customerId}>
                        <option value=""> Select a customer</option>
                        {customers.map((customer)=> (
                            <option key={customer.customerId} value={customer.customerId}> {customer.name}</option>
                    ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label>Product</label>
                    <select className="form-select" name="productId" onChange={handleProductChange} value={order.productId}>
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product.productId} value={product.productId}> {product.name}</option>
                        ))}
                    </select>
                </div>  

                <div>
                    <input className="form-control mb-2"name="quantity" onChange={handleChange} value={order.quantity} placeholder="Quantity"/>
                </div>
                
                <div>
                    <label>Price</label>
                    <input className="form-control mb-2" name="price" onChange={handleChange} value={order.price} placeholder="Select a product first" readOnly/>
                </div>
                <button className="btn btn-primary mb-2" onClick={handleSubmit}>Submit Order</button>
            </div>
        </>
    )
}

export default OrderForm;