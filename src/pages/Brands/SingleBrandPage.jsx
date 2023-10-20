import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const SingleBrandPage = ({ product }) => {
    const { name, _id } = product;
    const navigate = useNavigate()
    const handleProductDetails = _id => {
        navigate(`/productDetails/${_id}`)
    }
    return (
        <div>
            {name}
            <button onClick={() => handleProductDetails(product._id)}>details</button>
            <Link to={`/updateProduct/${_id}`}>
            <button>update</button>
            </Link>
        </div>
    );
};

SingleBrandPage.propTypes = {
    product: PropTypes.object.isRequired
}

export default SingleBrandPage;