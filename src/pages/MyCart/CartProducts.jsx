import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartProducts = ({ product }) => {
    const { photoUrl, name, brandName, type, price, rating } = product;
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // fetch(`http://localhost:5000/cartProducts/${_id}`,{
                //     method: 'DELETE'
                // })
                // .then(res=>res.json())
                // .then(data=>{
                //     if (data.deleteCount > 0) {
                //           Swal.fire(
                //                 'Deleted!',
                //                 'Your product has been deleted.',
                //                 'success'
                //               )
                //         }
                //     })
                fetch(`http://localhost:5000/cartProducts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Network response was not ok ' + res.statusText);
                        }
                        return res.json();
                    })
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            );
                        } else {
                            Swal.fire(
                                'Error!',
                                'Product could not be deleted.',
                                'error'
                            );
                        }
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                        Swal.fire(
                            'Error!',
                            'Something went wrong.',
                            'error'
                        );
                    });

            }
        })
    }
    return (
        <div className='my-10'>
            <div className="card w-96 glass">
                <figure><img className='w-full h-52' src={photoUrl} alt="product" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex'>
                        <p className='text-base font-medium'>Brand: {brandName}</p>
                        <p className='text-base'>Type: {type}</p>
                    </div>
                    <div className='flex'>
                        <p>Price: {price}</p>
                        <p>Rate: {rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(product._id)} className="btn btn-outline btn-info">Delete</button>
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