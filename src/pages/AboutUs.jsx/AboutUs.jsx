
const AboutUs = () => {

    return (
        <div className="pb-28">
            <h3 className="text-center py-10 text-blue-600 text-3xl font-medium">WHO WE ARE</h3>
            <h2 className="text-center text-6xl max-w-5xl mx-auto pb-20">A Page where is the best products sell. Our every product is high level brands product</h2>
            <div className="flex flex-col lg:flex-row lg:px-20">
                <div className="lg:w-1/2">
                    <img src="https://i.ibb.co/PM5R8np/oc-011-1.jpg" alt="" />
                </div>
                <div className="lg:w-1/2">
                    <p className="md:pl-10 py-12 text-lg">Founded in 2010, TechElectro is a leading retailer specializing in technology and electronic products. Our mission is to provide high-quality, innovative products at competitive prices, ensuring that our customers always have access to the latest in tech and electronics.We prioritize our customers in everything we do, striving to provide exceptional service and support.</p>
                    <p className="pl-10">1. 50+ % returning customers</p>
                    <p className="pl-10 py-4">2. 100+ positive feedbacks</p>
                    <p className="pl-10">3. Money back guarantee</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;