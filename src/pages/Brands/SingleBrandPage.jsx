import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const SingleBrandPage = ({ product }) => {
    const { _id, photoUrl, name, brandName, type, price, rating } = product;
    const navigate = useNavigate()
    const handleProductDetails = _id => {
        navigate(`/productDetails/${_id}`)
    }
    return (
        <>
            <div>
                <div className="card w-96 glass">
                    <figure><img src={photoUrl} alt="product" className='h-96 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className='text-lg font-semibold'>Brand: {brandName}</p>
                        <p className='text-base'>Type: {type}</p>
                        <p>Price: ${price}</p>
                        <p>Rate: {rating}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleProductDetails(product._id)} className="btn btn-info btn-outline">Details</button>
                            <Link to={`/updateProduct/${_id}`}>
                                <button className='btn btn-error btn-outline'>update</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

SingleBrandPage.propTypes = {
    product: PropTypes.object.isRequired
}

export default SingleBrandPage;