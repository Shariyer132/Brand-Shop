import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Brands = ({ handleViewPage }) => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);

    return (
        <div>
            <h2 className="text-5xl text-center mt-14">Our Latest Brands</h2>
            <p></p>
            <div className="grid grid-cols-1 gap-5 lg:mx-10 p-10 lg:grid-cols-3 md:grid-cols-2">
                {
                    brands.map((brand) =>
                        <div key={brand.id} onClick={() => handleViewPage(brand.brandName)} className="border shadow-md py-4 rounded-lg w-96 flex flex-col items-center">
                            <img className="w-44 h-36" src={brand.image} alt="" />
                            <h2 className="text-3xl text-center font-semibold flex-wrap">{brand.name}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

Brands.propTypes = {
    handleViewPage: PropTypes.func
}

export default Brands;