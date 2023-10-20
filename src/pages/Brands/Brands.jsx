import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
const Brands = ({handleViewPage}) => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data=>setBrands(data))
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 gap-5 lg:mx-10 p-10 lg:grid-cols-3 md:grid-cols-2">
                {
                    brands.map((brand, idx) =>
                        <div onClick={() => handleViewPage(brand.brandName)} className="border shadow-md py-4 rounded-lg w-96 flex flex-col items-center" key={idx}>
                            <img className="w-44 h-36" src={brand.image} alt="" />
                            <h2 className="text-3xl text-center font-semibold flex-wrap">{brand.name}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Brands;