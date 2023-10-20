import { Link, useLoaderData, useParams } from "react-router-dom";
import SingleBrandPage from "./SingleBrandPage";


const BrandsDetails = () => {
    const products = useLoaderData();
    const { brandName } = useParams();
    console.log(products, brandName);
    const spacificBrandProducts = products.filter(product => product.brandName === brandName)
    return (
        <>
            {
                spacificBrandProducts.length > 0 ? <div>
                    <Link to="/"><button className="btn btn-outline my-4 ml-4">Back to home</button></Link>
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
                    <h3 className="text-center py-6 text-5xl font-semibold"> Our best products</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                        {
                            spacificBrandProducts?.map(product => <SingleBrandPage key={product._id} product={product}></SingleBrandPage>)
                        }
                    </div>
                   </div>
                </div> :
                    <><Link to="/"><button className="btn btn-outline">Go back Home</button></Link>
                        <h2 className="text-center text-6xl font-bold">No data is available</h2></>
            }
        </>
    );
};

export default BrandsDetails;