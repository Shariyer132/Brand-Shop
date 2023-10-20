import { Link, useLoaderData, useParams } from "react-router-dom";
import SingleBrandPage from "./SingleBrandPage";


const BrandsDetails = () => {
    const products = useLoaderData();
    const { brandName } = useParams();
    console.log(products, brandName);
    const spacificBrandProducts = products.filter(product => product.brandName === brandName)
    console.log(spacificBrandProducts.length);
    return (
        <>
        {
            spacificBrandProducts.length > 0 ? <div>
            <Link to="/">Back to home</Link>
            {/* slider */}
            <div>
                <div className="carousel w-full">
                    {
                        spacificBrandProducts?.map((product, idx) => (<>
                            <div id={`slide${idx}`} className="carousel-item relative w-full max-h-screen" key={idx}>
                                <img src={product.photoUrl} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href={`#slide${idx === 0 ? spacificBrandProducts.length - 1 : idx - 1}`} className="btn btn-circle">❮</a>
                                    <a href={`#slide${(idx + 1) % spacificBrandProducts.length}`} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </>
                        ))
                    }
                </div>
            </div>
            {/* cards */}
            <div>
                {
                    spacificBrandProducts?.map(product => <SingleBrandPage key={product._id} product={product}></SingleBrandPage>)
                }
            </div>
        </div> : <><Link to="/">Go back Home</Link>
        <h2>nothing is here</h2></>
        }
        </>
    );
};

export default BrandsDetails;