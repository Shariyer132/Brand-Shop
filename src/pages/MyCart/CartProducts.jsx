import PropTypes from 'prop-types';

const CartProducts = ({product}) => {
    const {name} = product;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

CartProducts.propTypes = {
    product: PropTypes.object.isRequired
};

export default CartProducts;