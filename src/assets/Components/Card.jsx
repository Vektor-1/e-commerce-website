import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Product from '../Product1.png';

function Card() {
    return (
        <div className="w-[260px] h-[373px] bg-transparent mx-4 p-2 overflow-hidden">
            {/* Top section */}
            <div className="h-[170px] relative bg-white rounded-2xl">
                <img src={Product} alt="Product" className="w-[180] h-[106] p-8 pt-12 object-cover rounded-t-lg"/>
                <div className="absolute top-0 left-0 m-2 bg-green-500 text-white text-xs px-3 py-1 rounded-2xl">
                    -30%
                </div>
                <div className="absolute top-0 right-0 m-2">
                    <FaHeart className="text-black-500"/>
                </div>
            </div>
            {/* Bottom section */}
            <div className=" bg-transparent justify-between p-3">
                <div className="flex-col items-center">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-gray-600 font-light">Brand Name</h3>
                        <p className="text-lg font-semibold">$99.99</p>
                    </div>
                    <div className="flex justify-between items-start">
                        <p className="text-lg font-medium">Product Name</p>
                        <button className="ml-4 p-2 bg-blue-500 text-white rounded">
                            <FaShoppingCart/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;