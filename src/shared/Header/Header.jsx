
import headerBg from '../../assets/abstract-blue-background-with-beautiful-fluid-shapes-free-vector.jpg';
const Header = () => {

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">The Most Popular <br />Products on the Market</h1>
                        <p className="mb-5 text-xl font-semibold">Elementor full-feature demo: online store, lots of unique Brands & products, Always the best product sell.</p>
                        <div>
                            <button className="btn btn-info mr-5">Buy The7 . $39</button>
                            <button className="btn btn-primary btn-outline">Dicover all products</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;