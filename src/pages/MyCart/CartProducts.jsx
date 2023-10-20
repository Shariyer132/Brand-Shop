import PropTypes from 'prop-types';

const CartProducts = ({ product }) => {
    const { photoUrl, name, brandName, type, price, rating } = product;
    return (
        <div className='mt-10'>
            <div className="card w-96 glass">
                <figure><img className='w-full h-52' src={photoUrl} alt="product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-info">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartProducts.propTypes = {
    product: PropTypes.object.isRequired
};

export default CartProducts;