import {Link, useLocation} from 'react-router-dom'

function Navbar(){
    const location = useLocation();

    const getLabel = (path,defaultLabel) => {
        return location.pathname === path?
        <Link className='nav-link' to='/'> Home</Link>:
        <Link className='nav-link' to={path}> {defaultLabel}</Link>;
    }


    return(
        <>
            <nav className="navbar navbar-dark md bg-dark w-100">
                <div className="container- d-flex flex-row justify-content-between w-100">
                    <ul className="navbar-nav d-flex flex-row gap-3 justify-content-evenly w-100">
                        <li className='nav-item'>{getLabel('/order', 'Place Order')}</li>
                        <li className='nav-item '>{getLabel('/product','Add Product')}</li>
                        <li className='nav-item '>{getLabel('/customer', 'Add Customer')}</li>
                    </ul>
                    

                </div>
                
            </nav>
        </>
    );
}

export default Navbar;