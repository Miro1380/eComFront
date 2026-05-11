import {useForm} from 'react-hook-form';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';


function OrderForm2(){
    const {register, handleSubmit, formState:{errors},watch} = useForm({mode:"onBlur"});

    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    
    const selectedProductId = watch('productId');
    const selectedProduct = products.find(product => String (product.productId) === String (selectedProductId));
    const price = selectedProduct? selectedProduct.price : 0;

    useEffect(() =>{
        //Fetch products and customers, turn response into json and set state with data.
        const loadFormData = async () => {
            try{
                const productResponse = await fetch('https://ecom-demo-production-f909.up.railway.app/api/products');
                const productData = await productResponse.json();
                setProducts(productData);
                
                const customerResponse = await fetch('https://ecom-demo-production-f909.up.railway.app/api/customers');
                const customerData = await customerResponse.json();
                setCustomers(customerData);

            }
            catch(error){
                console.log('Error Laoading Products. Something whent wrong');
            }
        }
        loadFormData();
    }, []);

    const onSubmit = async (data) => {
        //Handle From submission with post request to api/oders.Data is form data.
        console.log('Form Data:', data);

        //Create payload for POST fetch call
        const payload = {
            customerId:data.customerId,
            productId: data.productId,
            quantity: parseInt(data.quantity),
            price: parseFloat(price)
        };
        console.log('Sending to Api:', payload);

        try {
            const response = await fetch('https://ecom-demo-production-f909.up.railway.app/api/orders',{
                method:'POST',
                headers:{'Content-type': 'application/json'},
                body:JSON.stringify(payload)
            });

            console.log("Submitting:", response);

            
            if(response.ok){
                const result = await response.text();
                console.log('Order Created successfully', result);
                //alert('Order Placed');
            } else{
                const errorText = await response.text();
                console.error('Server rejected order', errorText);
            }
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    }

    return(
    <>
        <Navbar/>

        <div className="container mt-3"> 
            <h2>Make New Order</h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-3'>
                <label> Customer: </label>
                <select className='form-select'{...register('customerId', {required:"Customer selection is required."})}>
                    <option value="">Select a customer</option>
                    {customers.map(customer => (
                        <option key={customer.customerId} value={customer.customerId}> {customer.name}</option>
                    ))}
                </select>

                {errors.customerId && (
                    <p className='text-danger small'> {errors.customerId.message}</p>
                )}

            </div>
            
            {/**/}
            <label> Product: </label>
            <select className='form-select' {...register('productId', {required:"Product selection is required."})}>
                <option value=""> select a product</option>
                {products.map(product => (
                    <option key={product.productId} value ={product.productId}> {product.name}</option>
                ))}
            </select>
            {errors.productId && (
                <p className='text-danger small'> {errors.productId.message}</p>
            )}

            <label>Quantity: </label>
            <input className='form-control mb-2' type="number" {...register('quantity', {required:"Quantity is required.", min: {value:1, message:'Must order at least 1'}})}></input>
            {errors.quantity && (
                <p className='text-danger small'>{errors.quantity.message}</p>
            )}

            <label>Price:</label>
            <input className='form-control mb-2'type="number" value={price} readOnly></input>
            <button className='btn btn-primary mb-2' type="submit"> Submit Order </button>
        </form>
        </div>

    </>
    )
}

export default OrderForm2;
