import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const photoUrl = form.PhotoUrl.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const product = { photoUrl, name, brandName, type, price, rating, description };
        fetch('https://coffee-shop-server-eight.vercel.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                form.reset();
            })
    }
    return (<>
        <Navbar></Navbar>
        <div className="p-24">
            <form onSubmit={handleSubmit}>
                <div className="md:flex gap-5">
                    {/* image */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product image URL" name="PhotoUrl" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* name */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Product Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    {/* brand name */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"> Brand</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Brand Name" name="brandName" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* type */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"> Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Category" name="type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    {/* price */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"> Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Product Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* rating */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rate Product</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* short description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="short description of product" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <input type="submit" value="Add Product" className="btn btn-block" />
                </div>
            </form>
        </div>
        <Footer />
    </>
    );
};

export default AddProduct;