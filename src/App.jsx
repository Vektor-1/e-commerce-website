import './index.css';
import sneakers from './assets/Images.png';
import Card from './assets/Components/Card';
import Footer from "./assets/Components/Footer.jsx";
import Promo from './assets/Promo.png';

function App() {
    return (
        <div className="bg-amber-50">
            {/* Notification Bar */}
            <div className="bg-black text-white p-4 text-center flex px-40 justify-between align-middle">
                <p className="p-1.5">Do not miss out on amazing deals! Join our newsletter to receive a 10% OFF code.</p>
                <p className="border-gray-700 bg-gray-800 p-1.5 border-1 rounded-md">BRIXAgency99</p>
            </div>

            {/* Main Container with Padding */}
            <div>  {/* This is where the padding is added */}
                {/* Header */}
                <div className="bg-white shadow-md p-4 flex justify-between items-center px-40">
                    <div className="flex space-x-4">
                        <li className="list-none cursor-pointer hover:underline">Home</li>
                        <li className="list-none cursor-pointer hover:underline">Shop</li>
                        <li className="list-none cursor-pointer hover:underline">Contact Us</li>
                    </div>
                    <div className="text-2xl font-bold">
                        <h1>Pyrim</h1>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
                        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Sign Up</button>
                        <i className="text-2xl cursor-pointer">Acc</i>
                    </div>
                </div>

                {/* Main Content */}
                <div className="text-center m-8 px-40">
                    <h1 className="text-4xl px-52 flex-wrap text-wrap font-bold mb-4">
                        Design & High Quality Sneakers
                    </h1>
                    <p className="text-gray-600 px-20 flex-wrap">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                        phasellus mollis sit aliquam sit nullam neque ultrices.
                    </p>
                    <div className="justify-between p-4 gap-8">
                        <button>
                            <a href="#"
                               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Shop Now
                            </a>
                            <a href="#"
                                 className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
                                  Learn More
                            </a>
                        </button>
                    </div>

                </div>
                <div className="text-center m-8">
                    <img src={sneakers} alt="sneakers" className="mx-auto w-[1121] h-[611]" />
                </div>
                <div className="text-center m-8">
                    <h3 className="text-2xl font-bold mb-4">Discover a world of products</h3>
                    <p className="text-gray-600 flex-wrap">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                        phasellus mollis sit aliquam sit nullam neque ultrices.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="flex flex-wrap justify-center gap-4 mx-8 px-40">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                {/* Promo Section */}
                <div className="flex justify-center items-center my-8">
                    <img src={Promo} alt="Promo" className="w-full max-w-4xl h-auto" />
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
