import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const {photoUrl, name, brandName, type, price, rating, description} = product;
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
        console.log(product);
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
                        text: 'Your product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <>
        <Navbar></Navbar>
        <div className="bg-[#D1E8E2] p-24">
            <h3 className="text-center text-5xl font-semibold pb-7">Update Product: {name}</h3>
            <form onSubmit={handleSubmit}>
                <div className="md:flex gap-5">
                    {/* image */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={photoUrl} required placeholder="Product image URL" name="PhotoUrl" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* name */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={name} required placeholder="Product Name" name="name" className="input input-bordered w-full" />
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
                            <input type="text" defaultValue={brandName} required placeholder="Brand Name" name="brandName" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* type */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text"> Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={type} required placeholder="Category" name="type" className="input input-bordered w-full" />
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
                            <input type="number" name="price" defaultValue={price} required placeholder="Product Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* rating */}
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rate Product</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={rating} required placeholder="Rating" name="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* short description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" defaultValue={description} required placeholder="short description of product" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <input type="submit" value="Update" className="btn btn-block" />
                </div>
            </form>
        </div>
        <Footer />
        </>
    );
};

export default UpdateProduct;