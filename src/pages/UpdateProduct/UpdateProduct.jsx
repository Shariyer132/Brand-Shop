import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const product = useLoaderData();
    const {name} = product;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default UpdateProduct;